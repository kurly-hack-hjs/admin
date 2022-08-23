import { GetScanResponse } from '@src/types'
import endpoint from './endpoint'

const getScanLogs = async (): Promise<GetScanResponse> => {
  const response = await endpoint.get('/scan/logs')
  const { data } = response
  return data
}

export { getScanLogs }
