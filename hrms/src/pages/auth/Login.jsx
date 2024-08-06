import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config"; // Adjust the path as per your project structure
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
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      console.log("Login successful, user:", userCredential.user);
      Login(userCredential.user); // Pass the entire user object
      navigate("/");
  })
  .catch((error) => {
    console.error("Login error:", error);
    setStatus({ error: error.message });
  })
  .finally(() => {
    setSubmitting(false);
  });
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
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
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
                autoComplete="current-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          Don't have an account? <Link to="/register">Register</Link>here
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;

{
  /*import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

function Login({ login }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (formData.email === 'admin' && formData.password === '123') {
    
      login({ email: formData.email });
  

      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <Alert severity="error" sx={{mt:2}}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography>Don't have an account?<Link href='/Register' variant='body2' sx={{textDecoration:"none",m:"5px",fontSize:"17px"} }>Register</Link>here</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
*/
}
