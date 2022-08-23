import { GetScoreResponse } from '@src/types'
import endpoint from './endpoint'

const getScore = async (): Promise<GetScoreResponse> => {
  const response = await endpoint.get('/item/score_board')
  const { data } = response
  return data
}

export { getScore }
