type car = {
    id: number;
    marca: string;
    modello: string;
}


var i: number;
var concessionario: car[] = [
    { id: 0, marca: "ford", modello: "kuga" },
    { id: 1, marca: "daewoo", modello: "matiz" },
    { id: 2, marca: "ford", modello: "c-max" },
    { id: 3, marca: "opel", modello: "corsa" },
    { id: 4, marca: "peugeut", modello: "106" },
];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Inizio popolamento");
console.log("");

async function auto(concessionario: car[]) {
    for (i = 0; i < concessionario.length; i++) {
        
        await delay(5000);
        
        console.log("id: " + concessionario[i].id);
        console.log("marca: " + concessionario[i].marca);
        console.log("modello: " + concessionario[i].modello);
        console.log("");
    }
    if (i = 4) {console.log("Fine popolamento")}


}
auto(concessionario);