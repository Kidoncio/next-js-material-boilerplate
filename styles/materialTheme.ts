import { createTheme as MaterialCreateTheme, responsiveFontSizes } from '@mui/material'


export const materialTheme = responsiveFontSizes(
  MaterialCreateTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#7446DA',
      },
      secondary: {
        main: '#6FC9CE',
      },
    },
    typography: {
      fontSize: 14,
    },
  })
)
