import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function Form({ fields, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {fields.map((field) => (
        <TextField
          key={field.name}
          margin="normal"
          required
          fullWidth
          id={field.name}
          label={field.label}
          name={field.name}
          autoComplete={field.name}
          type={field.type || 'text'}
        />
      ))}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Form;
