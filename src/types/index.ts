export type ScanItem = {
  id: number
  name: string
}

export type Scan = {
  id: number
  loginId: string
  orderId: number
  timestamp: Date
  scanResult: ScanItem[]
  scanUrl: string
}

export type GetScanResponse = {
  content: Scan[]
}

export type Score = {
  id: number
  name: string
  key1: string | null
  key2: string | null
  key3: string | null
  key4: string | null
  minimumScore: number
}

export type GetScoreResponse = {
  content: Score[]
}
