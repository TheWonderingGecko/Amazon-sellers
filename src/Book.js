export const Book = ({ img, title, author, getBook, id, number }) => {
  return (
    <>
      <article className="book">
        <label className="ranking">#{number + 1}</label>
        <img src={img} alt={title} />
        <h2>{title} </h2>
        <h4>{author.toUpperCase()}</h4>
      </article>
    </>
  )
}
