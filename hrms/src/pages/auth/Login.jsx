import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from '../../config/Firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';



function Login({ login }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      login({ email: formData.email });
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };


  return (
    <> 
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(3),
          backgroundColor: '#f8f9fa',
          borderRadius: theme.spacing(2),
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
        <Typography
          component="h1"
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'center',
            mb: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          HR Management System
        </Typography>
        <Typography 
          component="h2" 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            fontWeight: 'medium',
            mb: 2,
          }}
        >
          Sign In
        </Typography>
        {error && <Alert severity="error" sx={{ mt: 1, mb: 2, width: '100%' }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'primary.main' },
                '&:hover fieldset': { borderColor: 'primary.dark' },
                '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
              },
            }}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'primary.main' },
                '&:hover fieldset': { borderColor: 'primary.dark' },
                '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 1 }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/password-reset')}
            >
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ mr: 1 , mt: 0.5 }}>
              Don't have an account?
            </Typography>
            <Button href='/Register' variant="text" size="small">
              Register here
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>

    </>
  );
}

export default Login;