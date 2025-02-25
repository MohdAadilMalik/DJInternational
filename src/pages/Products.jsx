import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { images } from '../constants/images';

const products = [
  {
    id: 1,
    name: 'IGBT Module CM100DY-24H',
    image: images.products.igbtModule,
    description: 'High-power insulated-gate bipolar transistor (IGBT) module designed for industrial applications.',
    specs: ['1200V', '100A', 'Low saturation voltage', 'High switching speed'],
  },
  {
    id: 2,
    name: 'IPM PS22A79',
    image: images.products.ipmModule,
    description: 'Intelligent Power Module (IPM) for efficient motor control applications.',
    specs: ['Built-in gate drive', 'Protection features', 'Compact design', 'High reliability'],
  },
  {
    id: 3,
    name: 'DIP IPM PS21767',
    image: images.products.dipIpm,
    description: 'Dual-In-line Package Intelligent Power Module (DIP IPM) for industrial applications.',
    specs: ['600V', '10A', 'High integration', 'Easy mounting'],
  },
  {
    id: 4,
    name: 'Fast Recovery Diode FMG2G100US60',
    image: images.products.fastRecoveryDiode,
    description: 'High-speed switching diode for power applications.',
    specs: ['600V', '100A', 'Fast recovery', 'Low forward voltage'],
  },
  {
    id: 5,
    name: 'Thyristor Module TD180N16KOF',
    image: images.products.thyristorModule,
    description: 'High-power thyristor for industrial control applications.',
    specs: ['1600V', '180A', 'High surge capability', 'Reliable performance'],
  },
  {
    id: 6,
    name: 'AC Film Capacitor MKPH',
    image: images.products.acFilmCapacitor,
    description: 'High-quality AC film capacitor for power factor correction.',
    specs: ['440VAC', 'Low loss', 'Long life'],
  },
];

function Products() {
  const { mode } = useTheme();

  return (
    <Box component="main" sx={{ minHeight: '100vh', pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            background: mode === 'dark'
              ? 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)'
              : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: mode === 'dark'
                      ? '0 8px 32px rgba(144, 202, 249, 0.2)'
                      : '0 8px 32px rgba(25, 118, 210, 0.2)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography gutterBottom variant="h5" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {product.specs.map((spec, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {spec}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        borderRadius: '28px',
                        textTransform: 'none',
                        background: mode === 'dark'
                          ? 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)'
                          : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
