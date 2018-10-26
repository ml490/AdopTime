import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as animalActions from '../../actions/AnimalActions';
import autoBind from 'auto-bind';
import ManageAnimalPageView from '../manageAnimalsPage/ManageAnimalPageView';

class ManageAnimalPage extends React.Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            animal: Object.assign({}, this.props.animal)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.animal.animalId !== nextProps.animal.animalId) {
            this.setState({ animal: Object.assign({}, nextProps.animal) });
        }
    }

    updateAnimalState(event) {
        const field = event.target.name;
        let animal = this.state.animal;
        animal[field] = event.target.value;

        this.setState({ animal: animal });
    }

    saveAnimal() {
        // check animal validation

        this.props.actions.updateAnimal(this.state.animal);

        this.context.router.history.push('/');
    }

    render() {
        return (
            <ManageAnimalPageView animal={this.state.animal}
                                  onChange={this.updateAnimalState}
                                  onSave={this.saveAnimal} />
        );
    }
}

ManageAnimalPage.propTypes = {
    animal: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageAnimalPage.contextTypes = {
    router: PropTypes.object.isRequired
};

function getAnimalById(animals, id) {
    const animal = animals.filter(x => x.animalId === id);

    if (animal) return animal[0];

    return null;
}

function mapStateToProps(state, ownProps) {
    const animalId = ownProps.match.params.id;

    let animal = {
        animalId: '',
        name: '',
        age: '',
        color: '',
        description: '',
        status: ''
    };

    if (animalId && state.animals.length > 0) {
        animal = getAnimalById(state.animals, animalId);
    }

    return {
        animal: animal
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(animalActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAnimalPage);