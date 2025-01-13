import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.error("Errore durante il recupero del post", error);
            });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className="container">
                <h2>{post.titolo}</h2>
                <p>{post.contenuto}</p>
                <img src={post.immagine} alt={post.titolo} className="img-fluid" />

                <div>
                    {post.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-2 m-2">{tag}</span>
                    ))}
                </div>

                <button className="btn btn-secondary mt-3" onClick={() => navigate("/posts")}>
                    Torna alla lista
                </button>
            </div>
        </main>
    );
}
