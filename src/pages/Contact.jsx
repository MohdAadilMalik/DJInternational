import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MotionBox = motion(Box);

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: 'Visit Us',
    details: [
      'B4/2 Ground Floor, Model Town 1,',
      'Delhi 110009, India',
      'Shop: 299, Lajpatrai Market,',
      'Old Delhi 110006',
    ],
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: 'Call Us',
    details: ['+91 9871160781', '+91 9810261069'],
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'Email Us',
    details: ['Salesdji5@gmail.com'],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: 'Business Hours',
    details: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="h5" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
            Get in Touch with Our Expert Team
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: 'grey.50',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    <Box sx={{ color: 'primary.main' }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </MotionBox>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={0} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Google Maps */}
        <Box sx={{ mt: 8, height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8887243421814!2d77.18931021508861!3d28.698739982393635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021635428a5f%3A0x4c346e1c3eb3f247!2sModel%20Town%201%2C%20Model%20Town%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1645510615000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="DJ International Location"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
