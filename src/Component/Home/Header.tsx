import React from "react";
import Slider from "react-slick";
import { FiSend } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const Header = () => {
  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("your email send successfully");
      resetForm();
    },
  });
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="home-header">
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="first-slider">
            <div className="slider-content">
              <h1>
                Don’t miss amazing <br />
                grocery deals
              </h1>
              <p>Sign up for the daily newsletter</p>
              <form className="d-flex align-items-center">
                <span>
                  <FiSend />
                </span>
                <input type="email" placeholder="Your e-mail address" />
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
          <div className="second-slider">
            <div className="slider-content">
              <h1>
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p>Save up to 50% off on your first order</p>
              <form className="d-flex align-items-center">
                <span>
                  <FiSend />
                </span>
                <input type="email" placeholder="Your e-mail address" />
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
