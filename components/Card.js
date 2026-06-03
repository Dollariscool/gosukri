export default function Card({ title, body }) {
  return (
    <article className="card glass">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
