const animals = [
    {
        animalId: "1234-5678-sdf",
        name: "a1",
        age: 12,
        color: "blue",
        description: "very loud",
        status: "unknown"
    },
    {
        animalId: "1234-5678-sdf",
        name: "a2",
        age: 10,
        color: "green",
        description: "very loud",
        status: "unknown"
    },
    {
        animalId: "1234-5678-sdf",
        name: "c1",
        age: 14,
        color: "blue",
        description: "very loud",
        status: "unknown"
    },
    {
        animalId: "1234-5678-sdf",
        name: "d1",
        age: 2,
        color: "blue",
        description: "very loud",
        status: "unknown"
    }
];


class AnimalApi {
    static getAllAnimals() {
         return new Promise((resolve) => {
            resolve(Object.assign([], animals));
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