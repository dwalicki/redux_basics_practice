import React from 'react';

const Movieslist = (props) => {
    console.log('11111',props)
    
    const renderMovies = (movies) => (
        movies ?
        movies.map((item, indexofMovie) =>(
            <div key={indexofMovie}>
                {item.name}
            </div>
        )) 
        : null
    );

    return (
        <div>
            {renderMovies(props.data.movies)}
        </div>
    );
};

export default Movieslist;