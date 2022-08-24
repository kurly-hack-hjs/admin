import { Board } from '@components'
import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid'
import { getScanLogs } from '@src/apis/scan'
import { Scan } from '@src/types'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import styles from './scanLogs.module.scss'

const ScanLogs = () => {
  const [scanList, setScanList] = useState<Scan[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getScanLogs()
      setScanList(data.content || [])
    })()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 70 },
    { field: 'loginId', headerName: '아이디', width: 70 },
    {
      field: 'timestamp',
      headerName: '스캔 시각',
      width: 200,
      // valueFormatter: (params: GridValueFormatterParams) => format(new Date(params.value), 'yy-mm-dd'),
    },
    {
      field: 'scanResult',
      headerName: '스캔 결과',
    },
    {
      field: 'scanUrl',
      headerName: '이미지경로',
      width: 200,
    },
    {
      field: 'tryCount',
      headerName: '시도횟수',
    },
  ]

  const rows = scanList

  return (
    <div className={styles.scanLogsWrap}>
      <h1>스캔API 사용자</h1>
      <Board columns={columns} rows={rows} />
    </div>
  )
}

export default ScanLogs
