import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

const ThemeContext = createContext();

const themeOptions = {
  blue: {
    light: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
      },
    },
    dark: {
      primary: {
        main: '#90caf9',
        light: '#64b5f6',
        dark: '#42a5f5',
      },
      secondary: {
        main: '#ce93d8',
        light: '#e1bee7',
        dark: '#ba68c8',
      },
    },
  },
  tech: {
    light: {
      primary: {
        main: '#2196f3',
        light: '#4dabf5',
        dark: '#1769aa',
      },
      secondary: {
        main: '#3f51b5',
        light: '#7986cb',
        dark: '#303f9f',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
    },
    dark: {
      primary: {
        main: '#0d47a1',
        light: '#1976d2',
        dark: '#002171',
      },
      secondary: {
        main: '#00b0ff',
        light: '#69e2ff',
        dark: '#0081cb',
      },
      background: {
        default: '#1a1a1a',
        paper: '#242424',
      },
    },
  },
  nature: {
    light: {
      primary: {
        main: '#43a047',
        light: '#76d275',
        dark: '#00701a',
      },
      secondary: {
        main: '#fdd835',
        light: '#ffff6b',
        dark: '#c6a700',
      },
    },
    dark: {
      primary: {
        main: '#81c784',
        light: '#b2fab4',
        dark: '#519657',
      },
      secondary: {
        main: '#fff176',
        light: '#ffffa8',
        dark: '#cabf45',
      },
    },
  },
  elegant: {
    light: {
      primary: {
        main: '#5d4037',
        light: '#8b6b61',
        dark: '#321911',
      },
      secondary: {
        main: '#d4af37',
        light: '#ffdf64',
        dark: '#a07f00',
      },
    },
    dark: {
      primary: {
        main: '#8d6e63',
        light: '#be9c91',
        dark: '#5f4339',
      },
      secondary: {
        main: '#ffd700',
        light: '#ffff52',
        dark: '#c7a600',
      },
    },
  },
  modern: {
    light: {
      primary: {
        main: '#212121',
        light: '#484848',
        dark: '#000000',
      },
      secondary: {
        main: '#ff4081',
        light: '#ff79b0',
        dark: '#c60055',
      },
    },
    dark: {
      primary: {
        main: '#424242',
        light: '#6d6d6d',
        dark: '#1b1b1b',
      },
      secondary: {
        main: '#ff80ab',
        light: '#ffb2dd',
        dark: '#c94f7c',
      },
    },
  },
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const [colorTheme, setColorTheme] = useState('tech');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...themeOptions[colorTheme][mode],
          background: {
            default: mode === 'light' ? '#ffffff' : '#1a1a1a',
            paper: mode === 'light' ? '#ffffff' : '#242424',
            ...themeOptions[colorTheme][mode]?.background,
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
            secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            '@media (min-width:600px)': {
              fontSize: '3.5rem',
            },
          },
          h2: {
            fontSize: '2rem',
            fontWeight: 600,
            '@media (min-width:600px)': {
              fontSize: '2.5rem',
            },
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                transition: 'all 0.3s ease-in-out',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                boxShadow: 'none',
                '& .MuiToolbar-root': {
                  backgroundColor: mode === 'dark' 
                    ? 'rgba(18, 18, 18, 0.7)'
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  margin: '16px',
                  transition: 'all 0.3s ease-in-out',
                },
              },
            },
          },
        },
      }),
    [mode, colorTheme]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const changeColorTheme = (newTheme) => {
    setColorTheme(newTheme);
  };

  const value = {
    mode,
    toggleTheme,
    colorTheme,
    changeColorTheme,
    availableThemes: Object.keys(themeOptions),
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
