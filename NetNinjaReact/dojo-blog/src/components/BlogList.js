const BlogList = ({ details, title, handleDelete }) => {
  //What is done above is called destructuring

  //   const details = props.details;
  //   const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>;
      {details.map((detail) => (
        <div className="detail-preview">
          <h3>{detail.fName}</h3>
          <h4>{detail.lName}</h4>
          <button onClick={() => handleDelete(detail.id)}>Delete Detail</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
