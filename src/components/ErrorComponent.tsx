interface ErrorComponentProps {
  message: string
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <article style={{ background: 'red', color: 'white' }}>{message}</article>
  )
}
