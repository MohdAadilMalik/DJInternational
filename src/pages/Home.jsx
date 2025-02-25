import { Box, Container, Typography, Button, Grid, useTheme as useMuiTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { images } from '../constants/images';

function Home() {
  const { mode } = useTheme();
  const theme = useMuiTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${images.main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: mode === 'dark' 
              ? 'rgba(0, 0, 0, 0.7)'
              : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(5px)',
          },
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="lg"
        sx={{ 
          position: 'relative',
          pt: { xs: 12, md: 20 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: mode === 'dark'
                    ? 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)'
                    : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Trusted Semiconductor Partner
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Serving the semiconductor and industrial components industry since 1995.
              </Typography>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '28px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  background: mode === 'dark'
                    ? 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)'
                    : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                  boxShadow: mode === 'dark'
                    ? '0 3px 5px 2px rgba(144, 202, 249, .3)'
                    : '0 3px 5px 2px rgba(25, 118, 210, .3)',
                }}
              >
                Explore Products
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src={images.products.igbtModule}
                alt="IGBT Module"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: mode === 'dark'
                    ? '0 8px 32px rgba(144, 202, 249, 0.2)'
                    : '0 8px 32px rgba(25, 118, 210, 0.2)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
