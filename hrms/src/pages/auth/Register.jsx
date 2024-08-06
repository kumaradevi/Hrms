import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

// Validation schema
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function Register() {
  const navigate = useNavigate();
  {/*const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log("User registered successfully");
      navigate("/login");
      // You can redirect the user or update the UI here
    } catch (error) {
      setStatus({ error: error.message });
    } finally {
      setSubmitting(false);
    }
  };
*/}
 const handleSubmit=(values, { setSubmitting, setStatus })=>{
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(()=>{console.log("User registered successfully");
        navigate("/login");})
        .catch((error)=>{
            setStatus({ error: error.message });
        }).finally=()=>{
       setSubmitting(false)
        }
        
    
 }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, status }) => (
            <Form>
              <Field
                as={TextField}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Field
                as={TextField}
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
              {status && status.error && (
                <Alert severity="error" sx={{ mt: 2, width: "100%" }}>
                  {status.error}
                </Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Register
              </Button>
              <Box>
            <Typography>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Box>
            </Form>
          )}
          
        </Formik>
      </Box>
    </Container>
  );
}

export default Register;













{/*import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Alert } from '@mui/material';
import { Link,  useNavigate } from 'react-router-dom';


function Register() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
      if(formData.firstName && formData.email && formData.password && formData.confirmPassword){
     
       navigate("/login")
      }
    // Here you would typically make an API call to register the user
    console.log('Registration data:', formData);
    // Implement registration logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Register
            
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
*/}
