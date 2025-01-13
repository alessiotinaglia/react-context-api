import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Benvenuto nella nostra app di ricette!</h2>
                        <h4>
                            Scopri una varietà di ricette deliziose e facili da preparare.
                        </h4>
                        <h4>
                            Esplora la lista delle ricette, aggiungi le tue preferite e condividi con gli amici!
                        </h4>
                        <NavLink to="/posts" className="btn btn-primary button mt-3">Inizia ora</NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="/cina-cucina-iStock-600101062-1080x720.jpg" alt="Food" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
