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
          <h4>{detail.body}</h4>
          <h5>{detail.author}</h5>
          {/* <button onClick={() => handleDelete(detail.id)}>Delete Detail</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
