class Pet{
    constructor(name){
        this.name = name
    }

    getSurname = () => this.name
    getName = function(){
        return this.name
    }
}

my_pet = new Pet("Woolf")

console.log(my_pet.getName())
console.log(my_pet.getSurname())


let pet = {
    name: "ABC",
     getNameObject: function(){
        return this.name
     },
     getSurnameObject: ()=> this.name

}

console.log(pet.getNameObject())
console.log(pet.getSurnameObject())