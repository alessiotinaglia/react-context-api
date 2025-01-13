import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Post.module.css';

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati", error);
      });
  }, []);

  useEffect(() => {
    if (id) {
      const post = posts.find(p => p.id === parseInt(id));
      setSelectedPost(post);
    }
  }, [id, posts]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
        if (selectedPost && selectedPost.id === id) {
          setSelectedPost(null);
        }
      })
      .catch((error) => {
        console.error("Errore durante la cancellazione", error);
      });
  };

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]); 
  };

  return (
    <main>
      <div className="container">
        <Link to="/posts/form" className="btn btn-success w-100 text-center mb-3">Aggiungi una nuova ricetta</Link>
        <div className="row">
          {posts.map((post) => (
            <div className="col-12 col-sm-6 col-md-4" key={post.id}>
              <div className={`card ${style.cardCustom}`}>
                <img className={`card-img-top ${style.cardFotoCustom}`} src={post.immagine} alt="Card image" />
                <div className="card-body" id="card-tot">
                  <h5 className="card-title">{post.titolo}</h5>
                  <p className="card-text">{post.contenuto}</p>
                  <div>
                    {post.tags.map((tag, index) => (
                      <a href="#" key={index} className="btn btn-primary me-2">{tag}</a>
                    ))}
                  </div>
                  <NavLink to={`/posts/${post.id}`} className="btn btn-info mt-3">Dettagli</NavLink>
                  <button className="btn btn-danger mt-3 ms-2" onClick={() => handleDelete(post.id)}>Elimina</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="mt-5">
            <h2>{selectedPost.titolo}</h2>
            <p>{selectedPost.contenuto}</p>
            <img src={selectedPost.immagine} alt={selectedPost.titolo} className="img-fluid" />
          </div>
        )}
      </div>
    </main>
  );
}
