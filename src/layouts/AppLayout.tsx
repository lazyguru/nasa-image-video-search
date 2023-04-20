import Navbar from '../components/Navbar'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="container text-slate-300">
      <Navbar />
      {children}
      <footer className="float-right">© Joe Constant 2023</footer>
    </div>
  )
}
