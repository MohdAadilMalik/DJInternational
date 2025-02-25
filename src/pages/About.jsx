import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import GroupsIcon from '@mui/icons-material/Groups';

const MotionBox = motion(Box);

const principles = [
  {
    title: 'Quality Assurance',
    description: 'We maintain stringent quality control measures to ensure that the semiconductor and industrial components electronics we provide meet the highest standards. Our products are sourced from reputable manufacturers and undergo thorough inspections.',
    icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Manufacturing Excellence',
    description: 'As authorized distributors for MITSUBISHI ELECTRIC JAPAN and other leading brands, we ensure that all products meet international quality standards and specifications.',
    icon: <FactoryIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Customer Focus',
    description: 'Our dedicated team works closely with customers to understand their requirements and provide tailored solutions. We believe in building long-term relationships through exceptional service.',
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
  },
];

const timeline = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'DJ International was established in Delhi, India.',
  },
  {
    year: '2000',
    title: 'Market Expansion',
    description: 'Expanded operations across major industrial hubs in India.',
  },
  {
    year: '2010',
    title: 'International Partnerships',
    description: 'Became authorized distributors for leading global manufacturers.',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: 'Celebrating over 25 years of excellence in semiconductor distribution.',
  },
];

function About() {
  return (
    <Box component="main" sx={{ py: 8 }}>
      {/* Company Overview */}
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            About DJ International
          </Typography>
          <Typography variant="h5" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
            Your Trusted Partner in Semiconductor Distribution Since 1995
          </Typography>
        </MotionBox>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              DJ International has been serving the semiconductor and industrial components industry
              for more than 25 years. Based in Delhi, we have established ourselves as a leading
              distributor of high-quality electronic components and industrial solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              As authorized distributors for MITSUBISHI ELECTRIC JAPAN and other renowned brands,
              we take pride in providing our customers with authentic, high-quality products and
              exceptional service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/about-image.jpg"
              alt="Company facility"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>

        {/* Our Principles */}
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Principles
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {principles.map((principle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'grey.50',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {principle.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {principle.description}
                  </Typography>
                </Paper>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* Company Timeline */}
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Journey
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {timeline.map((event, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                    minWidth: 100,
                  }}
                >
                  {event.year}
                </Typography>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </Box>
              </Paper>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default About;
