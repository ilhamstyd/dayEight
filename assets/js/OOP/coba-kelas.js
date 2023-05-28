class car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getInfo(){
        return `The car is ${this.brand} ${this.model}`;
    }
}