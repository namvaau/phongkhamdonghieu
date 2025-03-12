import React from "react";

interface BreadcrumbProps {
    title: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ title }) => {
    return (
        <div className="breadcrumbs overlay">
            <div className="container">
                <div className="bread-inner">
                    <div className="row">
                        <div className="col-12">
                            <h2>{title}</h2>
                            <ul className="bread-list">
                                <li>Home</li>
                                <li><i className="icofont-simple-right"></i></li>
                                <li className="active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
