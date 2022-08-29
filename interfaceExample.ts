export interface MovieDetails{
    name: string
    description: string
    photo: string
    trailer: string
    duration: number
}

let tenentDetails : MovieDetails = {
    name: "Tenet",
    description:"This is suspense thriller",
    photo: "www.google.com/tenet",
    trailer: "www.youtube.com/tenet",
    duration: 90
}

console.log(tenentDetails.trailer);

// output: www.youtube.com/tenet