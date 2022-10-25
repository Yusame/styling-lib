import type { Theme } from 'theme-ui';

export const theme1: Theme = {
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0077CC',
    secondary: '#004a80',
    tertiary: '#cce3f4',
    accent: '#609',
    muted: '#f6f6f6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    }
  },
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      color: 'primary',
    }
  },
  // variants for buttons
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      }
    },
    secondary: {
      color: 'secondary',
      bg: 'tertiary',
      '&:hover': {
        opacity: 0.7,
      }
    },
    disabled: {
      color: 'text',
      bg: 'muted'
    }
  },
  // variants for forms
  forms: {
    select: {
      borderColor: 'secondary',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        outline: 'none',
      },
    },
  },
  // variants for cards
  cards: {
    primary: {
      padding: 20,
      borderRadius: 20,
      bg: '#ffffff',
      m: '20px',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 10,
      borderRadius: 20,
      bg: '#ffffff',
      m: '20px',
      borderWidth: '2px',
      borderColor: 'primary',
      borderStyle: 'solid',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
  },
};

export const theme2: Theme = {
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#C73730',
    secondary: '#8B2621',
    accent: '#609',
    muted: '#f6f6f6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    }
  },
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      color: 'primary',
    }
  },
};