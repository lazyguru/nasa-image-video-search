import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ImageSearchPage from '../pages/ImageSearchPage'
import VideoSearchPage from '../pages/VideoSearchPage'
import HistoryPage from '../pages/HistoryPage'
import NotFoundPage from '../pages/NotFoundPage'
import RoutePaths from '../types/RoutePaths'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutePaths.home} element={<HomePage />} />
      <Route path={RoutePaths.imageSearch} element={<ImageSearchPage />} />
      <Route path={RoutePaths.videoSearch} element={<VideoSearchPage />} />
      <Route path={RoutePaths.history} element={<HistoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
