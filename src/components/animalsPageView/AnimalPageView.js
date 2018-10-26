import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'auto-bind';
import * as animalActions from '../../actions/AnimalActions';
import AnimalPageViewTable from './AnimalPageViewTable';

class AnimalPageView extends React.Component {
    constructor(props, context) {
        super(props, context);

        autoBind(this);
    }

    editAnimal(animalId) {
        this.context.router.history.push('/manageAnimal/' + animalId);
    }

    removeAnimal(animalId) {
        try {
            this.props.actions.removeAnimal(animalId);
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h1>Animals</h1>
                <AnimalPageViewTable animals={this.props.animals}
                                     onAnimalEdit={this.editAnimal}
                                     onAnimalRemove={this.removeAnimal} />
            </div>
        );
    }
}

AnimalPageView.propTypes = {
    animals: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

AnimalPageView.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const animals = state.animals;

    animals.sort(function (a, b) {
        return b.animalId.toLowerCase() < a.animalId.toLowerCase();
    });

    return {
        animals: state.animals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(animalActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPageView);