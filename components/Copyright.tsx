import React from 'react'

import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright ©
      <MuiLink color="inherit" href="https://github.com/Kidoncio">
        Your Website
      </MuiLink>
      {new Date().getFullYear()}.
    </Typography>
  )
}
