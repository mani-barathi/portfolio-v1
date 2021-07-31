function Blog({ data }) {
  return (
    <a
      className="blog__link"
      target="_blank"
      href={`https://blog.manibarathi.xyz/${data.slug}`}
      rel="noreferrer"
    >
      <li className="blog">{data.title}</li>
    </a>
  );
}

export default Blog;
