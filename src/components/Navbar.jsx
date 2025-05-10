import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme as useMuiTheme,
  Tooltip,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const themeNames = {
  blue: 'Classic Blue',
  tech: 'Tech Dark',
  nature: 'Nature Green',
  elegant: 'Elegant Gold',
  modern: 'Modern Minimal',
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElTheme, setAnchorElTheme] = useState(null);
  const { mode, toggleTheme, colorTheme, changeColorTheme, availableThemes } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenThemeMenu = (event) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleCloseThemeMenu = () => {
    setAnchorElTheme(null);
  };

  const handleThemeChange = (newTheme) => {
    changeColorTheme(newTheme);
    handleCloseThemeMenu();
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: mode === 'dark' ? 'white' : 'primary.main',
              textDecoration: 'none',
              letterSpacing: '.1rem',
            }}
          >
            DJ INTERNATIONAL
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: mode === 'dark' ? 'white' : 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: mode === 'dark' 
                    ? 'rgba(18, 18, 18, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              {!isAuthenticated ? (
                <>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to="/login"
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to="/register"
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={() => { handleCloseNavMenu(); logout(); }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: mode === 'dark' ? 'white' : 'primary.main',
              textDecoration: 'none',
              letterSpacing: '.1rem',
            }}
          >
            DJ INTL
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: mode === 'dark' ? 'white' : 'primary.main',
                  '&:hover': {
                    backgroundColor: mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
            {!isAuthenticated ? (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{
                    mx: 1,
                    color: mode === 'dark' ? 'white' : 'primary.main',
                    '&:hover': {
                      backgroundColor: mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{ mx: 1 }}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button
                onClick={logout}
                sx={{
                  mx: 1,
                  color: mode === 'dark' ? 'white' : 'primary.main',
                  '&:hover': {
                    backgroundColor: mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                Logout
              </Button>
            )}
          </Box>

          {/* Theme Controls */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/* Color Theme Selector */}
            <Tooltip title="Change color theme">
              <IconButton
                onClick={handleOpenThemeMenu}
                sx={{ color: mode === 'dark' ? 'white' : 'primary.main' }}
                aria-label="change color theme"
              >
                <PaletteIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="theme-menu"
              anchorEl={anchorElTheme}
              open={Boolean(anchorElTheme)}
              onClose={handleCloseThemeMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: mode === 'dark' 
                    ? 'rgba(18, 18, 18, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                },
              }}
            >
              {availableThemes.map((themeName) => (
                <MenuItem
                  key={themeName}
                  onClick={() => handleThemeChange(themeName)}
                  selected={colorTheme === themeName}
                >
                  <ListItemIcon>
                    {colorTheme === themeName && (
                      <CheckIcon sx={{ color: mode === 'dark' ? 'white' : 'primary.main' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary={themeNames[themeName]}
                    sx={{ color: mode === 'dark' ? 'white' : 'inherit' }}
                  />
                </MenuItem>
              ))}
            </Menu>

            {/* Light/Dark Mode Toggle */}
            <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={toggleTheme}
                sx={{ color: mode === 'dark' ? 'white' : 'primary.main' }}
                aria-label="toggle theme"
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
