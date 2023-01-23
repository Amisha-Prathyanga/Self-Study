const BlogList = ({ details, title }) => {
  //What is done above is called destructuring

  //   const details = props.details;
  //   const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {details.map((detail) => (
        <div className="detail-preview">
          <h3>{detail.title}</h3>
          <h4>{detail.author}</h4>
          {/* <button onClick={() => handleDelete(detail.id)}>Delete Detail</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
