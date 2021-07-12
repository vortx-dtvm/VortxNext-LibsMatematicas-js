let dik = 6.39;
let dp = 13;
let porcentagem = 6;
let fatordiacumuladoantes = 1.00159340;
let vne = 10000;

let tdik = Math.pow(((dik/100)+1),(1/252))-1;

let fatordi = (1 + tdik);

let fatorspread = (Math.pow((1+porcentagem),(dp/252))).toFixed(9);

let fatordiacumulado = (fatordiacumuladoantes * fatordi).toFixed(8);

let fatorjuros = (fatordiacumulado * fatorspread).toFixed(8);

let pu = (vne * fatorjuros).toFixed(8); 

// precisamos definir o número de casas

console.log(fatordi); // desvio de aprox 0.0008
console.log(fatorspread); // desvio de aprox 0.075
console.log(fatordiacumulado); // desvio de aprox 0.0001
console.log(fatorjuros); // desvio de aprox 0.10
console.log(pu); // desvio de aprox 1029