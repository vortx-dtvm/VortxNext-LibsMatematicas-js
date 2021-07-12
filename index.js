function calculopu(dik, porcentagem, dp, fatordiacumuladoantes, vne) {

    const tdik = Math.pow(((dik / 100) + 1), (1 / 252)) - 1;

    const fatordi = (1 + tdik);

    const fatorspread = Math.pow((1 + porcentagem), (dp / 252));

    const fatordiacumulado = fatordiacumuladoantes * fatordi;

    const fatorjuros = fatordiacumulado * fatorspread;

    const pu = vne * fatorjuros;
    return pu
}

void async function main() {    
    let dik = 6.39;
    let dp = 13;
    let porcentagem = 0.06;
    let fatordiacumuladoantes = 1.00159340;
    let vne = 10000;

    const puFinal = calculopu(
        dik,
        porcentagem,
        dp,
        fatordiacumuladoantes,
        vne)

    console.log(puFinal)
    // precisamos definir o número de casas
}()

//dif do di (javascrpit e excel) 0,0000821
//dif do di (excel fator di e tki) 0,0000844
//dif do pu (javascript e excel) 0,848
