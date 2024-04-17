import { useState } from "react";

export default function useForm(initFormData) {
  const [formData, setFormData] = useState({
    error: "",
    success: "",
    data: initFormData,
  });

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      data: { ...formData.data, [name]: value },
    });
  };

  const handleFormMessage = (message, isSuccess) => {
    if (isSuccess) setFormData({ ...formData, success: message, error: "" });
    else setFormData({ ...formData, success: "", error: message });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return {
    formData,
    handleFormMessage,
    handleFormDataChange,
    handleFormSubmit,
  };
}
