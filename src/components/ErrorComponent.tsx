interface ErrorComponentProps {
  message: string
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return message ? (
    <article
      className="max-w-sm w-full place-self-center"
      style={{ background: 'red', color: 'white' }}
    >
      {message}
    </article>
  ) : (
    <></>
  )
}
