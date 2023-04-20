import { useNavigate } from 'react-router-dom'
import RoutePaths from '../types/RoutePaths'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <ul>
        <li>
          <strong>NASA Image & Video Search</strong>
        </li>
      </ul>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate(RoutePaths.home)
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(RoutePaths.imageSearch)
            }}
          >
            Image Search
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(RoutePaths.videoSearch)
            }}
          >
            Video Search
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(RoutePaths.history)
            }}
          >
            History Page
          </button>
        </li>
      </ul>
    </nav>
  )
}
