import { Routes, Route } from "react-router-dom"
import Register from "./components/Register"

function App() {
  return (
    <Routes>
      {/* Root path */}
      <Route path="/" element={<Register />} />

      {/* Optional explicit path */}
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
