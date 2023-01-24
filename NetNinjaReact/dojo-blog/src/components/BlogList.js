import { Link } from "react-router-dom";

const BlogList = ({ details, title }) => {
  //What is done above is called destructuring

  //   const details = props.details;
  //   const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {details.map((detail) => (
        <div className="detail-preview" key={detail.id}>
          <Link to={`/blogs/${detail.id}`}> 
          {/* Linking to route parameter */}
            <h3>{detail.title}</h3>
            <h4>{detail.author}</h4>
          </Link>
          {/* <button onClick={() => handleDelete(detail.id)}>Delete Detail</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
