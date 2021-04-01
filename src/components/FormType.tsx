import React from "react";

const FormType: React.FC<{ formType: number }> = ({ formType }) => {
  switch (formType) {
    case 1:
      return <span>Tự đánh giá</span>;
    case 2:
      return <span>Đồng nghiệp đánh giá</span>;
    case 3:
      return <span>Bộ phận đánh giá</span>;
    case 4:
      return <span>Quản lý đánh giá</span>;
    default:
      return <span>Không xác định</span>;
  }
};

export default FormType;
