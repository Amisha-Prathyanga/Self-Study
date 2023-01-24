import { useParams } from "react-router-dom";

//Route parameters used to get each blog in seperate pages.With unique id's
const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
