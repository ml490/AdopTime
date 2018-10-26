
const animals = [
    {
        animalId: "1",
        name: "a1",
        age: 12,
        color: "blue",
        description: "very loud",
        status: "Single"
    },
    {
        animalId: "2",
        name: "a2",
        age: 10,
        color: "green",
        description: "very loud",
        status: "Complicated"
    },
    {
        animalId: "3",
        name: "c1",
        age: 14,
        color: "blue",
        description: "very loud",
        status: "Status3"
    },
    {
        animalId: "4",
        name: "d1",
        age: 2,
        color: "blue",
        description: "very loud",
        status: "Status 4"
    }
];


class AnimalApi {
    static getAllAnimals() {
        return new Promise((resolve) => {
            resolve(Object.assign([], animals));
        });
    }

    static removeAnimal(animalId) {
        return new Promise((resolve) => {
            const indexOfAnimalToDelete = animals.findIndex(animal => {
                animal.animalId == animalId;
            });
            animals.splice(indexOfAnimalToDelete, 1);

            resolve();
        });
    }

    static updateAnimal(animal){
        return new Promise((resolve) => {
            const animalIndexToUpdate = animals.findIndex(x => {x.animalId === animal.animalId;});

            animals[animalIndexToUpdate] = animal;

            resolve();
        });
    }

    // static exampleFunction(){
    //      return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(true){
    //                 resolve();
    //             }
    //             else{
    //                 reject("error");
    //             }
    //         });
    //      });
    // }
}

export default AnimalApi;