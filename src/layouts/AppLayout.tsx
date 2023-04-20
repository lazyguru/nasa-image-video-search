import Navbar from '../components/Navbar'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>© Joe Constant 2023</footer>
    </div>
  )
}
