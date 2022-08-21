import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <img alt="logo" src={'/images/logo_primary.svg'} style={{ width: 160, height: 25 }} />
          <Box sx={{ flexGrow: 0, marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
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
