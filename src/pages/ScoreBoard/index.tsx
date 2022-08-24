import { Board } from '@components'
import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid'
import { getScore } from '@src/apis/score'
import { Score } from '@src/types'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import styles from './scoreBoard.module.scss'

const ScoreBoard = () => {
  const [scoreList, setScoreList] = useState<Score[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getScore()
      setScoreList(data.content || [])
    })()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 70 },
    { field: 'name', headerName: '상품명', width: 70 },
    { field: 'key1', headerName: 'key1' },
    { field: 'key2', headerName: 'key2' },
    { field: 'key3', headerName: 'key3' },
    { field: 'key4', headerName: 'key4' },
    { field: 'minimumScore', headerName: '최소 검증값' },
  ]

  const rows = scoreList

  return (
    <div className={styles.scoreWrap}>
      <h1>상품 스코어 보드</h1>
      <Board columns={columns} rows={rows} />
    </div>
  )
}

export default ScoreBoard
