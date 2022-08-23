import Layout from '@src/feature/Layout'
import { Route, Routes } from 'react-router-dom'
import Scan from '@src/pages/Scan'
import Score from '@src/pages/Score'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="score" element={<Score />} />
        <Route path="scan" element={<Scan />} />
      </Route>
    </Routes>
  </>
)

export default App
