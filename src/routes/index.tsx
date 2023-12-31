import { Routes, Route } from 'react-router-dom'
import { PageCadastrar, PageHome, PageLayout, PageList, PageLogin } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/List" element={<ProtectedRoute />}>
          <Route path="" element={<PageList />} />
        </Route>
      </Route>

    </Routes>
  )
}