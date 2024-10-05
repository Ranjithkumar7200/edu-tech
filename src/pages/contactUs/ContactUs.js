import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactUs = () => {
  const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
  const USER_ID = "YOUR_EMAILJS_USER_ID";

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then((response) => {
        toast.success("Message sent successfully!", { autoClose: 1000 });
        resetForm();
      })
      .catch((err) => {
        toast.error("Failed to send message. Please try again later.", {
          autoClose: 1000,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <Row className="align-items-center">
        <Col lg={6} className="d-none d-lg-block">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Contact Us"
            fluid
          />
        </Col>
        <Col lg={6} xs={12}>
          <Formik
            initialValues={{ name: "", email: "", mobile: "", subject: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Field
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter your mobile number"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Field
                    as="textarea"
                    rows={3}
                    name="subject"
                    className="form-control"
                    placeholder="Enter your message or subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
