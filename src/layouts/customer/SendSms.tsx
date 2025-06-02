import React, { useEffect, useState } from 'react';
import section from '../../assets/img/section-img.png'
import * as XLSX from "xlsx";
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { BASE_URL } from '../../interface/InterfaceData';
const SendSms: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (pauseOnHover: boolean, description: string) => () => {
        api.open({
            message: 'Trạng thái',
            description: description,
            showProgress: true,
            pauseOnHover,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />
        });
    };

    const [date, setDate] = useState("");
    const [to, setTo] = useState("");
    const [content, setContent] = useState("");
    const sender = "TING TING";

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (evt) => {
            const data = evt.target?.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            const jsonData = XLSX.utils.sheet_to_json<unknown[]>(worksheet, { header: 1 });
            const rows = jsonData.slice(1);
            const phones: string[] = rows
                .map((row) => row[0])
                .filter((val) => typeof val === "string" || typeof val === "number")
                .map((val) => String(val).trim());

            const joinedPhones = phones.join(", ");
            setTo(joinedPhones);
        };

        reader.readAsBinaryString(file);
    };

    const formatDateTime = (date: Date): string => {
        const yyyy = date.getFullYear();
        const MM = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        const hh = String(date.getHours()).padStart(2, "0");
        const mm = String(date.getMinutes()).padStart(2, "0");
        const ss = String(date.getSeconds()).padStart(2, "0");
        return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
    };

    const formatDateToReadable = (datetimeStr: string): string => {
        const date = new Date(datetimeStr);

        const dd = date.getDate().toString().padStart(2, "0");
        const MM = (date.getMonth() + 1).toString().padStart(2, "0");
        const yyyy = date.getFullYear();

        return `${dd}/${MM}/${yyyy}`;
    };

    const formattedDate = date ? formatDateToReadable(date) : "";

    useEffect(() => {
        const newMessage = `PKDK DONG HIEU xin thong bao: Quy khach co lich tai kham vao ngay ${formattedDate || '[ngày]'}. Quy khach vui long den dung hen. LH: 0975 161 115`;
        setContent(newMessage);
    }, [formattedDate]);

    const handleSendSms = async (isAutoSend = false) => {
        if (!date || !to || !content) {
            openNotification(true, "Vui lòng điền đầy đủ thông tin trước khi gửi SMS.")();
            return;
        }

        const selectedDate = new Date(date);
        selectedDate.setDate(selectedDate.getDate() - 1); // ngày trước
        selectedDate.setHours(9, 0, 0); // 9:00:00

        const sendTime = isAutoSend ? formatDateTime(selectedDate) : null;

        const smsRequest = {
            to,
            content,
            sender,
            sendTime,
        };

        console.log("Đối tượng gửi SMS:", smsRequest.sendTime);

        try {
            const response = await fetch(`${BASE_URL}/api/sms/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(smsRequest),
            });

            const data = await response.json();
            if (data.status === "success") {
                openNotification(
                    true,
                    `Gửi tin nhắn thành công!.`
                )();
            } else {
                openNotification(false, "Gửi tin nhắn thất bại.")();
            }
        } catch (error) {
            console.error("Lỗi gửi SMS:", error);
            openNotification(true, "Đã xảy ra lỗi khi gửi SMS. Vui lòng thử lại sau.")();
        }
    };

    return (
        <>
            {contextHolder}
            <section className="appointment" style={{ paddingBottom: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Tạo lịch hẹn cho khách hàng!</h2>
                                <img src={section} alt="section" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Số điện thoại"
                                                    value={to}
                                                    onChange={(e) => setTo(e.target.value)}
                                                    required
                                                />
                                                <div className="input-group-append">
                                                    <input
                                                        type="file"
                                                        accept=".xlsx, .xls"
                                                        onChange={handleFileUpload}
                                                        style={{ padding: "10px 6px 6px", border: "1px solid #ced4da", borderRadius: "0 .25rem .25rem 0" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input
                                                name="date"
                                                placeholder="Ngày khám"
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea
                                                style={{ textTransform: "none" }}
                                                name="message"
                                                placeholder="Nhập tin nhắn của bạn..."
                                                value={content}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p style={{ paddingBottom: '10px' }}>
                                    Định dạng sđt là: 8491xxxxxxx trong đó 84 là mã quốc gia Việt Nam
                                    <br />
                                    Để gửi tới nhiều sđt cùng lúc vui lòng thêm dấu phẩy “, ” giữa các sđt. Bạn có thể gửi tối đa tới 100 sđt cùng lúc.
                                </p>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button onClick={() => handleSendSms(false)} className="btn">
                                                    Gửi SMS ngay
                                                </button>
                                                <button style={{ marginLeft: '10px' }} onClick={() => handleSendSms(true)} className="btn">
                                                    Gửi tự động
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( Lưu ý: Tính năng gửi tự động sẽ gửi vào lúc 9:00 trước 1 ngày so với ngày hẹn !)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SendSms;
