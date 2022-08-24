import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">
            <img alt="logo" src={'/images/logo_primary.svg'} style={{ width: 160, height: 25 }} />
          </NavLink>
          <Box sx={{ width: 160, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <NavLink to="score">상품 스코어</NavLink>
            <NavLink to="scan">스캔 로그</NavLink>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="subtitle1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#5F0080',
                textDecoration: 'none',
              }}>
              admin1
            </Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { Header }
