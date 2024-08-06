import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Alert,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function Login({ login }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoint.down('sm'));

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
        <PersonOutlineIcon sx={{fontSize:40,color:'primary.main',mb:1}}/>
  
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


      </Paper>




{/*       
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
        {error && <Alert severity="error">{error}</Alert>}
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
          <Typography>Don't have an account?<Button href='/Register'>Register</Button>here</Typography>
        </Box>
      </Box> */}
    </Container>
  );
}

export default Login;
