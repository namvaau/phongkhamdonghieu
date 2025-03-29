// export const BASE_URL = "http://localhost:8080";
// export const BASE_URL = "https://pkdkdonghieube.onrender.com";
export const BASE_URL = "https://pkdkdonghieube-production.up.railway.app";

export interface Specialty {
    id: number;
    name: string;
    description: string;
    icon: string;
    imageUrl: string;
    imageUrl1: string;
}

export interface SpecialtyDetail {
    id: number;
    introduction: string;
    function: string;
    mission: string;
    personnel: string;
    equipment: string;
    expertise: string;
    image1: string;
    image2: string;
    image3: string;
}

export interface Doctor {
    id: number;
    name: string;
    experience: number;
    description: string;
    speciality: string;
    imageUrl: string;
}

export interface ServiceDetail {
    id: number;
    detail: string; // Tên chi tiết dịch vụ
    price: number;  // Giá của chi tiết dịch vụ
    insurancePrice: number;  // Giá của chi tiết dịch vụ
}

export interface Service {
    id: number;
    name: string;
    serviceDetails: ServiceDetail[]; // Danh sách chi tiết
}

export interface News {
    length: number;
    id: number;
    title: string;
    summary: string;
    date: string; // Có thể dùng `Date` nếu xử lý định dạng thời gian
    imageUrl: string;
    newsDetails: NewsDetail
}

export interface NewsDetail {
    length: number;
    id: number;
    content: string;
    content1: string;
    content2: string;
    image1: string;
    image2: string;
    image3: string;
    title: string;
    createTime: string
}
