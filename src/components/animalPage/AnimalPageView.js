import React from 'react';
import PropTypes from 'prop-types';

const AminalPageView = ({animals}) => {
    return (
        <div>
            {animals.map((animal, i) => {
                return (
                    <div key={i}>
                        <h1>Name: {animal.name}</h1>
                        <h1>Age: {animal.age}</h1>
                        <h1>Color: {animal.color}</h1>
                    </div>
                );
            })};
        </div>
    );
};

AminalPageView.propTypes = {
    animals: PropTypes.array
};

export default AminalPageView;