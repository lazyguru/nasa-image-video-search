interface ErrorComponentProps {
  message: string
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  if (message) {
    return (
      <article style={{ background: 'red', color: 'white' }}>{message}</article>
    )
  } else {
    return <span />
  }
}
