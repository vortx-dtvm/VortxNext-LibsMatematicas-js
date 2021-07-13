function calculoPu(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const fatordi = calculoFatorDi(mediaCdi)
    const fatorspread = Math.pow((1 + porcentagem), (dp / 252));

    const fatordiacumulado = fatorDiAcumulado * fatordi;

    const fatorjuros = fatordiacumulado * fatorspread;

    const pu = vne * fatorjuros;
    return pu
}

function calculoFatorDi(mediaCdi) {
    return ((Math.pow(((mediaCdi / 100) + 1), (1 / 252))));
}
module.exports = { calculoPu, calculoFatorDi }