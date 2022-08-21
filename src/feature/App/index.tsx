import { Header } from '@feature'
import { Box, Container, Typography } from '@mui/material'
import { Search } from '@components'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 0,
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 5,
          }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#000',
              textDecoration: 'none',
            }}>
            부적합 리스트
          </Typography>
          <Search />
        </Box>
      </Container>
    </div>
  )
}

export { App }
