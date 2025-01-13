import { useContext } from 'react';
import { PostContext } from '../components/Context/PostContext';
import { NavLink } from 'react-router-dom';
import style from './Post.module.css';

export default function Post() {
  const { posts, deletePost } = useContext(PostContext);

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <main>
      <div className="container">
        <NavLink to="/posts/form" className="btn btn-success w-100 text-center mb-3">Aggiungi una nuova ricetta</NavLink>
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
      </div>
    </main>
  );
}
