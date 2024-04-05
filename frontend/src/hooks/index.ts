import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}



export const useBlog = ({ id }: { id: String }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        })
            .then(response => {
                // console.log(response.data);
                setBlog(response?.data);
                setLoading(false);
            })
    }, [id]);
    // console.log(blog);
    return {
        loading,
        blog
    }

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        })

            .then(response => {
                setBlogs(response?.data);
                setLoading(false);
            })

    }, []);
    return {
        loading,
        blogs
    }
}