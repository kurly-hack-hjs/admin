import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface Props {
  columns: GridColDef[]
  rows: Array<any>
}

const Board = ({ columns, rows }: Props) => {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export { Board }
