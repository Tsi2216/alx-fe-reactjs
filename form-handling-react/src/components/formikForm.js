import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        terms: false,
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
        terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 400);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" className="error" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <Field type="password" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" className="error" />
                    </div>
                    <div>
                        <Field type="checkbox" name="terms" />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                        <ErrorMessage name="terms" component="div" className="error" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;