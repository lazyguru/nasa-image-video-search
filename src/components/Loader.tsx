interface LoaderProps {
  show: boolean
}
export default function Loader({ show }: LoaderProps) {
  return show ? (
    <div className="flex items-center animate-pulse place-self-center">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  ) : (
    <></>
  )
}
