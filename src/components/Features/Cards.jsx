import React from 'react'
import { PARAMS_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { useParams, useLocation } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='bg-dark-blue'>
            <div className="container pb-5">
                <h2 className='product mb-0 text-center'>Cards</h2>
                <div className="row g-4 justify-center items-center">
                    {Object.keys(PARAMS_DATA).map((key) => (
                        <div key={key} className="col-12 col-sm-6 col-md-4">
                            <Link
                                to={`/map-card/${key}`}
                                state={PARAMS_DATA[key]}
                                className="card-link text-decoration-none">
                                <div className="card h-100 bg-purple">
                                    <div className="card-body">
                                        <h3 className="description mb-0 pb-3">{PARAMS_DATA[key].title}</h3>
                                        <p className="description mb-0">{PARAMS_DATA[key].text}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Routes>
                    <Route path="/map-card/:id" element={<MapPage />} />
                </Routes>
            </div>
        </div>
    );
};

const MapPage = () => {
    const { id } = useParams();
    const location = useLocation();
    let data = location.state || PARAMS_DATA[id];

    if (!data) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-danger">No data available</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Go Back to Cards
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary">{data.title}</h2>
            <p>{data.description}</p>
            <Link to="/" className="btn btn-secondary mt-3">Back to All Cards</Link>
        </div>
    );
};

export default Cards