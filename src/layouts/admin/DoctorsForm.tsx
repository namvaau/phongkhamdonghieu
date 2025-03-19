import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Input, Form, Upload, UploadProps } from "antd";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs";
import { RcFile } from "antd/es/upload";
import { useMediaQuery } from "react-responsive";
import { BASE_URL } from "../../interface/InterfaceData";

interface Doctor {
    id?: number;
    name: string;
    experience: number;
    description: string;
    imageUrl: string;
    speciality: string;
}

const DoctorManagement: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
    const [form] = Form.useForm();
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        const response = await axios.get(`${BASE_URL}/doctors`);
        setDoctors(response.data);
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`${BASE_URL}/doctors/${id}`);
        fetchDoctors();
    };

    const handleEdit = (doctor: Doctor) => {
        setEditingDoctor(doctor);
        form.setFieldsValue(doctor);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setEditingDoctor(null);
        form.resetFields();
        setIsModalOpen(true);
    };

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "pkdkdonghieu"); // Cấu hình trong Cloudinary

        const res = await fetch("https://api.cloudinary.com/v1_1/dworqu6ej/image/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        return data.secure_url; // URL ảnh sau khi upload
    };

    const handleUpload: UploadProps["customRequest"] = async ({ file, onSuccess, onError }) => {
        try {
            setUploading(true);
            const imageUrl = await uploadToCloudinary(file as RcFile);
            form.setFieldsValue({ imageUrl }); // Cập nhật vào Form
            setUploading(false);
            onSuccess?.("ok");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setUploading(false);
            onError?.(new Error("Upload failed"));
        }
    };

    const handleSubmit = async (values: Doctor) => {
        if (editingDoctor) {
            await axios.put(`${BASE_URL}/doctors/${editingDoctor.id}`, values);
        } else {
            await axios.post(`${BASE_URL}/doctors`, values);
        }
        setIsModalOpen(false);
        fetchDoctors();
    };

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const columns = [
        ...(!isMobile
            ? [
                {
                    title: "Hình ảnh",
                    dataIndex: "imageUrl",
                    key: "imageUrl",
                    render: (imageUrl: string) => (
                        <img src={imageUrl} alt="Doctor" style={{ width: 100, height: 120 }} />
                    ),
                },
            ]
            : []),
        { title: "Họ Và Tên", dataIndex: "name", key: "name" },
        { title: "Năm Làm Việc", dataIndex: "experience", key: "experience" },
        { title: "Chuyên Khoa", dataIndex: "speciality", key: "speciality" },
        {
            title: "Chỉnh Sửa", key: "actions", render: (_: unknown, record: Doctor) => (
                <>
                    <Button onClick={() => handleEdit(record)}>Chỉnh sửa</Button>
                    <Button onClick={() => handleDelete(record.id!)} danger>Xóa</Button>
                </>
            ),
        },
    ];

    return (
        <>
            <Breadcrumbs title="Thêm Bác Sĩ" />
            <div className="container">
                <button style={{ margin: '20px 0' }} onClick={handleAdd} className="btn">Thêm bác sĩ</button>
                <div className="table-responsive">
                    <Table dataSource={doctors} columns={columns} rowKey="id" />
                </div>

                <Modal
                    title={editingDoctor ? "Chỉnh sửa" : "Thêm"}
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    onOk={() => form.submit()}
                >
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item name="name" label="Họ Và Tên" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="experience" label="Năm Làm Việc" rules={[{ required: true }]}>
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item name="speciality" label="Chuyên Khoa" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="description" label="Giới Thiệu">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name="imageUrl" label="Hình ảnh">
                            {/* Hiển thị ảnh xem trước */}
                            {form.getFieldValue("imageUrl") && (
                                <img src={form.getFieldValue("imageUrl")} alt="Preview" style={{ width: 100, height: 120, marginTop: 10 }} />
                            )}
                            <Upload
                                customRequest={handleUpload}
                                showUploadList={false}
                                accept="image/*"
                            >
                                <Button loading={uploading}>
                                    {uploading ? "Đang tải lên..." : "Chọn ảnh"}
                                </Button>
                            </Upload>

                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        </>
    );
};

export default DoctorManagement;
