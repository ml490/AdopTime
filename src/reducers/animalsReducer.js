import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function animals(state = initialState.animals, action) {
    switch (action.type) {
        case types.LOAD_ANIMALS_SUCCESS:
            return action.animals;

        case types.REMOVE_ANIMAL_SUCCESS:
            return [
                ...state.filter(animal => animal.animalId !== action.animalId)
            ];

        case types.UPDATE_ANIMAL_SUCCESS:
              return [
                  ...state.filter(animal => animal.animalId !== action.animal.animalId),
                  Object.assign({}, action.animal)
              ];

        default:
            return state;
    }
}