import AnimalsApi from '../api/AnimalsApiMock';
import * as types from './actionTypes';

export function loadAnimalsSuccess(animals) {
    return {
        type: types.LOAD_ANIMALS_SUCCESS,
        animals
    };
}

export function removeAnimalSuccess(animalId) {
    return {
        type: types.REMOVE_ANIMAL_SUCCESS,
        animalId
    };
}

export function updateAnimalSuccess(animal){
    return {
        type: types.UPDATE_ANIMAL_SUCCESS,
        animal
    };
}

export function loadAnimals() {
    return function (dispatch) {
        return AnimalsApi.getAllAnimals().then(animals => {
            dispatch(loadAnimalsSuccess(animals));
        }).catch(error => {
            throw (error);
        });
    };
}

export function removeAnimal(animalId) {
    return function (dispatch) {
        return AnimalsApi.removeAnimal(animalId).then(() => {
            dispatch(removeAnimalSuccess(animalId));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateAnimal(animal) {
    return function (dispatch) {
        return AnimalApi.updateAnimal(animal).then(() => {
            dispatch(updateAnimalSuccess(animal));
        }).catch(error => {
            throw (error);
        });
    }
}