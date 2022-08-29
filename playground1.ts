class Booking {

    // properties
    ticketPrice : number 
    numberOfTickets : number 
    
    // constuctor
    constructor(price : number, ticketsBooked : number){
        this.ticketPrice = price
        this.numberOfTickets = ticketsBooked
    }
    public totalAmount(): number{
        return this.ticketPrice * this.numberOfTickets
    }
}


let ticketOne = new Booking(450,3)
console.log(ticketOne.totalAmount());
