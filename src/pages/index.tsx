import Layout from '@src/feature/Layout'
import { Route, Routes } from 'react-router-dom'
import ScanLogs from '@src/pages/ScanLogs'
import ScoreBoard from '@src/pages/ScoreBoard'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="score" element={<ScoreBoard />} />
        <Route path="scan" element={<ScanLogs />} />
      </Route>
    </Routes>
  </>
)

export default App
