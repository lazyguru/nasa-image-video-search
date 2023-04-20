import { Link } from 'react-router-dom'
import RoutePaths from '../types/RoutePaths'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const origStyle = 'w-full flex-grow lg:flex lg:items-center lg:w-auto'
  const [showMenu, setShowMenu] = useState(false)
  const [menuCss, setMenuCss] = useState(origStyle)
  useEffect(() => {
    if (showMenu) {
      setMenuCss('block ' + origStyle)
    } else {
      setMenuCss('hidden ' + origStyle)
    }
  }, [showMenu])
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
      <div className="flex items-center flex-shrink-0 text-slate-100 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          NASA Image & Video Search
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={menuCss}>
        <div className="text-sm lg:flex-grow">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to={RoutePaths.home}
          >
            Home
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to={RoutePaths.imageSearch}
          >
            Image Search
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to={RoutePaths.videoSearch}
          >
            Video Search
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            to={RoutePaths.history}
          >
            History Page
          </Link>
        </div>
      </div>
    </nav>
  )
}
