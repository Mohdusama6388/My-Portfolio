import { useState } from "react";
import Profile from "../assets/image.png";
import Style from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };


  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email address";
    if (!/^[0-9]{10}$/.test(formData.phone))
      return "Phone number must be 10 digits";
    if (!formData.message.trim()) return "Message cannot be empty";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch(
        "https://portfolio-3421c-default-rtdb.firebaseio.com/Portfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong, please try again!");
      }
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <img src={Profile} alt="Usama" className={Style.profileImg} />
        <h1>Contact Us</h1>
        <h2>Phone no: 6388086156</h2>
        <h2>Email: mohdusama23062004@gmail.com</h2>

        <form className={Style.form} onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className={Style.input}
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            className={Style.input}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={Style.input}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Send Message</label>
          <textarea
            name="message"
            className={Style.textarea}
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p className={Style.error}>{error}</p>}
          {success && <p className={Style.success}>{success}</p>}

          <button type="submit" className={Style.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
