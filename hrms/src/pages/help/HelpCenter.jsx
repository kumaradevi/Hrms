import React from 'react';
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function HelpCenter() {
  const faqItems = [
    {
      question: 'How do I request leave?',
      answer:
        "To request leave, navigate to the 'Leave Management' section and click on 'Leave Request'. Fill out the form with your leave details and submit it for approval.",
    },
    {
      question: 'Where can I view my payslips?',
      answer:
        "You can view your payslips in the 'Payroll' section under 'Payroll Records'. Select the pay period you want to view and download the payslip.",
    },
    {
      question: 'How do I update my personal information?',
      answer:
        "To update your personal information, go to 'User Settings' in the main menu. Here you can edit your profile details and save the changes.",
    },
    {
      question: 'What should I do if I forget my password?',
      answer:
        "If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email to reset your password.",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Help Center
      </Typography>
      <Typography variant="h6" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default HelpCenter;
