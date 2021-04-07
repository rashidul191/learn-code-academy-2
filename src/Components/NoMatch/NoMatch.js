import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section id="no-match  ">
            <div className="container text-center pt-5">
                <h1 className="display-4 pt-5">404 <br />Error Not Found</h1>
                <br /><br />
                <p className="lead">Back to <Link to="/"> Home </Link></p>
            </div>
        </section>
    );
};

export default NoMatch;