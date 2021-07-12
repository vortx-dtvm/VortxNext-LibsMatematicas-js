function calculoPu(dik, porcentagem, dp, fatordiacumuladoantes, vne) {

    const tdik = Math.pow(((dik / 100) + 1), (1 / 252)) - 1;

    const fatordi = (1 + tdik);

    const fatorspread = Math.pow((1 + porcentagem), (dp / 252));

    const fatordiacumulado = fatordiacumuladoantes * fatordi;

    const fatorjuros = fatordiacumulado * fatorspread;

    const pu = vne * fatorjuros;
    return pu
}

module.exports = calculoPu