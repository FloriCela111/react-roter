import { AppBar, Box, IconButton, Menu, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
        <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm:'none' } }}>
                <Menu />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
