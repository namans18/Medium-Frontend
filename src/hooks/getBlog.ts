import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
function useBlog({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}/api/v1/blog/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);
  return {
    loading,
    blog,
  };
}

export default useBlog;


