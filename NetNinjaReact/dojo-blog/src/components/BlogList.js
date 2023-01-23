const BlogList = ({details, title}) => {

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
        </div>
      ))}
    </div>
  );
};

export default BlogList;
