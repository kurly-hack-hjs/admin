import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'

const Search = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 165,
        height: 50,
        borderRadius: 30,
        boxSizing: 'border-box',
        border: '2px solid rgba(95, 0, 128, 0.8)',
      }}>
      <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search google maps' }} />
      <IconButton type="button" sx={{ p: '10px', width: 48, height: 48, color: '#5F0080' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export { Search }
