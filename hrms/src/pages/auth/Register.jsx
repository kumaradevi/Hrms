import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Alert, Paper, useTheme, useMediaQuery, Grid, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';

function Register() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    profilePictureUrl: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [openUrlDialog, setOpenUrlDialog] = useState(false);
  const [tempUrl, setTempUrl] = useState('');

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
    if (formData.firstName && formData.lastName && formData.email && formData.role && formData.password && formData.confirmPassword) {
      console.log('Registration data:', formData);
      navigate("/login");
    }
  };

  const handleUrlDialogOpen = () => {
    setOpenUrlDialog(true);
    setTempUrl(formData.profilePictureUrl);
  };

  const handleUrlDialogClose = () => {
    setOpenUrlDialog(false);
  };

  const handleUrlConfirm = () => {
    setFormData({ ...formData, profilePictureUrl: tempUrl });
    setOpenUrlDialog(false);
  };

  const handleUrlDelete = () => {
    setFormData({ ...formData, profilePictureUrl: '' });
    setTempUrl('');
    setOpenUrlDialog(false);
  };

  const roles = [
    { value: 'admin', label: 'Admin', icon: <AdminPanelSettingsIcon /> },
    { value: 'employee', label: 'Employee', icon: <BadgeIcon /> },
    { value: 'manager', label: 'Manager', icon: <SupervisorAccountIcon /> },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(1),
          backgroundColor: '#f8f9fa',
          borderRadius: theme.spacing(2),
        }}
      >
        <PersonAddIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'primary.main' },
                    '&:hover fieldset': { borderColor: 'primary.dark' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'primary.main' },
                    '&:hover fieldset': { borderColor: 'primary.dark' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
                  },
                }}
              />
            </Grid>
          </Grid>
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'primary.main' },
                '&:hover fieldset': { borderColor: 'primary.dark' },
                '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
              },
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="role"
                select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'primary.main' },
                    '&:hover fieldset': { borderColor: 'primary.dark' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
                  },
                }}
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<AddPhotoAlternateIcon />}
                onClick={handleUrlDialogOpen}
                fullWidth
                sx={{ mt: 2, height: '56px' }}
              >
                {formData.profilePictureUrl ? 'Change Profile URL' : 'Add Profile URL'}
              </Button>
            </Grid>
          </Grid>
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
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'primary.main' },
                '&:hover fieldset': { borderColor: 'primary.dark' },
                '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          >
            Register
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ mr: 1 , mt: 0.5 }}>
              Already have an account?
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="text" size="small">
                Sign in here
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
      
      <Dialog open={openUrlDialog} onClose={handleUrlDialogClose}>
        <DialogTitle>Add Profile Picture URL</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="profilePictureUrl"
            label="Profile Picture URL"
            type="url"
            fullWidth
            variant="standard"
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUrlDelete} startIcon={<DeleteIcon />} color="error">
            Delete
          </Button>
          <Button onClick={handleUrlDialogClose}>Cancel</Button>
          <Button onClick={handleUrlConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Register;