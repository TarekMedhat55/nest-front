import React from "react";
import contact from "../images/contact-2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Image from "next/image";
import Layout from "@/Component/Layout";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}
const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string().required("phone is Required"),
      firstName: Yup.string().required("first Name is Required"),
      lastName: Yup.string().required("last Name is Required"),
      message: Yup.string().required("Message Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values: Values, { resetForm }) => {
      toast.success("your email send successfully");
      resetForm();
    },
  });
  return (
    <Layout title="Contact Us - Nest">
      <div className="contactUs">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="contact-form">
                <h6>contact form</h6>
                <h2>drop us a line</h2>
                <div className="contact-inputs">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Fist Name"
                          className={
                            formik.touched.firstName && formik.errors.firstName
                              ? "form-control-error"
                              : undefined
                          }
                          {...formik.getFieldProps("firstName")}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className="text-danger">
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className={
                            formik.touched.lastName && formik.errors.lastName
                              ? "form-control-error"
                              : undefined
                          }
                          {...formik.getFieldProps("lastName")}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className="text-danger">
                            {formik.errors.lastName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className={
                            formik.touched.phone && formik.errors.phone
                              ? "form-control-error"
                              : undefined
                          }
                          {...formik.getFieldProps("phone")}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div className="text-danger">
                            {formik.errors.phone}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          placeholder="Your E-mail"
                          className={
                            formik.touched.email && formik.errors.email
                              ? "form-control-error"
                              : undefined
                          }
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          placeholder="Your Message"
                          className={
                            formik.touched.message && formik.errors.message
                              ? "form-control-error"
                              : undefined
                          }
                          {...formik.getFieldProps("message")}
                        ></textarea>
                        {formik.touched.message && formik.errors.message ? (
                          <div className="text-danger">
                            {formik.errors.message}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <button className="send">send message</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-img">
                <Image
                  src="/images/contact-2.png"
                  alt="contact us"
                  width={359}
                  height={420}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
