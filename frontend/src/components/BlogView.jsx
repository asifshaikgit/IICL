import { useEffect, useState } from 'react';
import { getBlogById } from '../api/blogs';
import { useParams, Link } from 'react-router-dom';

export default function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id);
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.content}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}
