import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
function Registerstudent() {
    const initialValues = {
        name: "",
        email: "",
        rollno:"",
        phone: "",
        address: "",
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("This is required field"),
        address: Yup.string().required(),
        email: Yup.string(),
        rollno: Yup.number().required("This is neccessary"),
        phone: Yup.number().min(10),
    });

    const onSubmit= (data)=>{
        axios.post("http://localhost:8002/data", data).then((response) => {
            console.log("IT WORKED");
            alert("Student Registration is done.");
    });
    }
    return (
        <div className="createPostPage">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Name of Student: </label>
                    <ErrorMessage name="name" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="name"
                        // placeholder="(Ex. Title...)"
                    />
                    <label>Roll NO : </label>
                    <ErrorMessage name="rollno" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="rollno"
                        // placeholder="(Ex. Title...)"
                    />
                    <label>Phone No: </label>
                    <ErrorMessage name="phone" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="phone"
                        // placeholder="(Ex. Post...)"
                    />
                    <label>E-mail Id: </label>
                    <ErrorMessage name="email" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="email"
                        placeholder="(Ex. John123@...)"
                    />
                    <label>Address: </label>
                    <ErrorMessage name="address" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="address"
                        // placeholder="(Ex. John123...)"
                    />

                    <button type="submit"> Register</button>
                </Form>
            </Formik>
        </div>
    );

}
export default Registerstudent;