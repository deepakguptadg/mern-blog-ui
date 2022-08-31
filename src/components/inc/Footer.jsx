import { Box, Typography } from '@mui/material'
import React from 'react'
const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'text.primary', textAlign: 'center',color: 'white'}}>
        <Typography py={1} variant='span' sx={{display: 'block'}} component='span'>
            Copyright &copy; Blog Web
        </Typography>
    </Box>
  )
}

export default Footer