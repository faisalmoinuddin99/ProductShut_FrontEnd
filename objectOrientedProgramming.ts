abstract class Department {
    private name: string
    private vertical: string
    protected numberOfEmployees: number
    private floorNumber: number 

    constructor(name: string, vertical: string, numberOfEmployees: number,floorNumber: number ){
        this.name = name
        this.vertical = vertical
        this.numberOfEmployees = numberOfEmployees
        this.floorNumber = floorNumber

        console.log(`The ${name} belongs to the ${vertical}
        has ${numberOfEmployees} employees and is located on 
        floor ${floorNumber}
        `);
        

    }

}
class Tech extends Department {

    constructor(name: string, vertical: string, numberOfEmployees: number,floorNumber: number ){
        super(name, vertical, numberOfEmployees, floorNumber)
    }
    public numberOfTables(){
        return this.numberOfEmployees/5 
    }
}

let backend = new Tech("Technology Service","Tech",50,10)
console.log(backend.numberOfTables());

/*
The Technology Service belongs to the Tech
        has 50 employees and is located on
        floor 10

10
*/