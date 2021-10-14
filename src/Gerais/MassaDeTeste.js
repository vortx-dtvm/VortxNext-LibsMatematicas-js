const massaDeTeste = {
    Gaussiana: [
        { x: 520.506049, media: 150.395710, desvioPadrao: 122.433292, finalEsperado: 0.00003378027542191}, 
        { x: 549.554, media: 606.990, desvioPadrao: 23.211, finalEsperado: 0.000804587746988250000},
        { x: 2033.80889254, media: 2322.12993827, desvioPadrao: 100.21199866, finalEsperado: 0.000063459390654853600}],
    SnellDescartes: [
        { n1: 2.230919, n2: 4.292914, ang1: 62, finalEsperado: 27.3126391},
        { n1: 1.285, n2: 2.288, ang1: 33.3, finalEsperado: 17.9595460811409},
        { n1: 0.19238544, n2: 1.85931099, ang1: 15.292, finalEsperado: 1.5637597589207217}],
    Log: [
        { x: 3.534, y: 5.084, finalEsperado:0.776355484},
        { x: 4, y: 6, finalEsperado: 0.773705614},
        { x: 2.12342233, y: 3.98175224, finalEsperado: 0.544993206}
        ],
    Bhaskara: [
        { coef1: 0.2, coef2: 4, coef3: 6, finalEsperado: 11.2444001768938, casasDecimais: 13 },
        { coef1: 0.323448, coef2: 9.393473 , coef3: 19.933333, finalEsperado: 11.5995202623306, casasDecimais: 13 },
        { coef1: 0.12345678, coef2: 77.29514846, coef3: 22.98765432, finalEsperado: 2103.20682823838, casasDecimais: 11}
        ],
    JurosSimples: [
        { capital: 400, taxaJuros: 0.06, numeroPeriodo: 12, finalEsperado: 288.0000000},
        { capital: 2838.833445, taxaJuros: 0.1, numeroPeriodo: 3, finalEsperado: 851.6500335},
        { capital: 7552.98920128, taxaJuros: 0.23332135, numeroPeriodo: 7, finalEsperado: 12335.9154588}],
    JurosCompostos: [
        { capital: 400, taxaJuros: 0.06, numeroPeriodos: 12, finalEsperado: 804.878588734220},
        { capital: 2838.833445, taxaJuros: 0.1, numeroPeriodos: 3, finalEsperado: 3778.487315295000},
        { capital: 7552.98920128, taxaJuros: 0.23332135, numeroPeriodos: 7, finalEsperado: 32783.295713429000}],
    Amortizacao: [
        { capitalInicial: 400, taxaJuros: 0.06, numeroPeriodo: 12, finalEsperado: 47.71081175226540},
        { capitalInicial: 2838.833445, taxaJuros: 0.1, numeroPeriodo: 3, finalEsperado: 1141.53695326133000},
        { capitalInicial: 7552.98920128, taxaJuros: 0.23332135, numeroPeriodo: 7, finalEsperado: 2289.83099120151000}],
    DesvioPadrao: [
        { valorIndividual: 98, mediaDosValores: 344, numeroDeValores: 10, finalEsperado: 77.7920304401421},
        { valorIndividual: 456.218765, mediaDosValores: 322.876542, numeroDeValores: 3, finalEsperado: 76.9851683433931},
        { valorIndividual: 23.565487899, mediaDosValores: 24.34567009, numeroDeValores: 223, finalEsperado: 0.052244863766}
        ],
}

module.exports = massaDeTeste