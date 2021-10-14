const { expect } = require('chai')
const Operacoes = require('./Operacoes')
const MassaDeTeste = require('./MassaDeTeste')


describe('Deve realizar o calculo da curva Gaussiana utilizando  JavaScript nativo', () => {

    it('Deve calcular o valor da curva, utilizando valor unitário', () => {
        // Massa
        let x = 520.506049;
        let media = 150.395710000;
        let desvioPadrao = 122.433292000;

        // Comportamento
        const resultado = Operacoes.calculaGaussiana(x, media, desvioPadrao)

        //Resultado esperado
        expect(resultado.toFixed(19)).to.be.equal('0.0000337802754219136')
    })

    it('Deve calcular o valor da curva, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Gaussiana.forEach(({ x, media, desvioPadrao, finalEsperado }) => {
            const resultado = Operacoes.calculaGaussiana(x, media, desvioPadrao)
            expect(resultado.toFixed(17)).to.be.equal(finalEsperado.toFixed(17))
        })
    })
})

describe('Deve realizar a lei Snell Descartes utilizando JavaScript nativo', () => {

    it('Deve calcular o valor do angulo, utilizando valor unitário', () => {
        // Massa
        let n1 = 0.230919;
        let n2 = 0.292914;
        let ang1 = 62;

        // Comportamento
        const resultado = Operacoes.calculaSnellDescartes(n1, n2, ang1)

        //Resultado esperado
        expect(resultado).to.be.equal(44.1127419448138)
    })

    it('Deve calcular o angulo 2, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.SnellDescartes.forEach(({ n1, n2, ang1, finalEsperado }) => {
            const resultado = Operacoes.calculaSnellDescartes(n1, n2, ang1, finalEsperado)
            expect(resultado.toFixed(7)).to.be.equal(finalEsperado.toFixed(7))
        })
    })
})

describe('Deve realizar o calculo da divisão de logs utilizando JavaScript nativo', () => {

    it('Deve calcular o valor da divisão, utilizando valor unitário', () => {
        // Massa
        let x = 36.534;
        let y = 25.08400000;

        // Comportamento
        const resultado = Operacoes.calculaLog(x, y)

        //Resultado esperado
        expect(resultado.toFixed(13)).to.be.equal('1.1166934448159')
    })

    it('Deve calcular o resultado da divisão, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Log.forEach(({ x, y, finalEsperado }) => {
            const resultado = Operacoes.calculaLog(x, y, finalEsperado)
            expect(resultado.toFixed(9)).to.be.equal(finalEsperado.toFixed(9))
        })
    })
})

describe('Deve realizar o calculo de Bhaskara utilizando JavaScript nativo', () => {

    it('Deve calcular o valor da divisão, utilizando valor unitário', () => {
        // Massa
        let coef1 = 0.2
        let coef2 = 4
        let coef3 = 6
        let finalEsperado = 11.2444001768938

        // Comportamento
        const resultado = Operacoes.calculaBhaskara(coef1, coef2, coef3, 13)

        //Resultado esperado
        expect(resultado.nativo).to.not.be.equal(finalEsperado)
        expect(resultado.floorFigure).to.be.equal(finalEsperado)
        expect(resultado.toFixed).to.be.equal(finalEsperado)
    })

    it('Deve calcular o resultado da divisão das duas raízes, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Bhaskara.forEach(({ coef1, coef2, coef3, finalEsperado, casasDecimais }) => {
            const resultado = Operacoes.calculaBhaskara(coef1, coef2, coef3, casasDecimais)
            expect(resultado.nativo).to.not.be.equal(finalEsperado)
            try {
                expect(resultado.floorFigure).to.be.equal(finalEsperado)
            } catch (_) {
                expect(resultado.toFixed).to.be.equal(finalEsperado)
            }
        })
    })
})

describe('Deve realizar o calculo de Juros Simples utilizando JavaScript nativo', () => {

    it('Deve calcular o valor do juros, utilizando valor unitário', () => {
        // Massa
        let capital = 410.456;
        let taxaJuros = 0.129;
        let numeroPeriodo = 3;

        // Comportamento
        const resultado = Operacoes.calculoJurosSimples(capital, taxaJuros, numeroPeriodo)

        //Resultado esperado
        expect(resultado).to.be.equal(158.84647200000)
    })

    it('Deve calcular do juros, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.JurosSimples.forEach(({ capital, taxaJuros, numeroPeriodo, finalEsperado }) => {
            const resultado = Operacoes.calculoJurosSimples(capital, taxaJuros, numeroPeriodo, finalEsperado)
            expect(resultado.toFixed(7)).to.be.equal(finalEsperado.toFixed(7))
        })
    })
})

describe('Deve realizar o calculo de Juros Compostos utilizando JavaScript nativo', () => {

    it('Deve calcular o valor do juros, utilizando valor unitário', () => {
        // Massa
        let capital = 2300;
        let taxaJuros = 0.306;
        let numeroPeriodo = 19;

        // Comportamento
        const resultado = Operacoes.calculoJurosCompostos(capital, taxaJuros, numeroPeriodo)

        //Resultado esperado
        expect(resultado.toFixed(8)).to.be.equal('366984.90233832')
    })

    it('Deve calcular do juros, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.JurosCompostos.forEach(({ capital, taxaJuros, numeroPeriodos, finalEsperado }) => {
            const resultado = Operacoes.calculoJurosCompostos(capital, taxaJuros, numeroPeriodos, finalEsperado)
            expect(resultado.toFixed(10)).to.be.equal(finalEsperado.toFixed(10))
        })
    })
})

describe('Deve realizar o calculo de Amortização utilizando JavaScript nativo', () => {

    it('Deve calcular o valor da prestação, utilizando valor unitário', () => {
        // Massa
        let capitalInicial = 1800;
        let taxaJuros = 0.09843;
        let numeroPeriodo = 3;

        // Comportamento
        const resultado = Operacoes.calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodo)

        //Resultado esperado
        expect(resultado.toFixed(12)).to.be.equal('721.806898252323')
    })

    it('Deve calcular da prestação, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Amortizacao.forEach(({ capitalInicial, taxaJuros, numeroPeriodo, finalEsperado }) => {
            const resultado = Operacoes.calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodo, finalEsperado)
            expect(resultado.toFixed(11)).to.be.equal(finalEsperado.toFixed(11))
        })
    })
})

describe('Deve realizar o calculo de Desvio Padrão utilizando JavaScript nativo', () => {

    it('Deve calcular o valor do desvio, utilizando valor unitário', () => {
        // Massa
        let valorIndividual = 23.565487899;
        let mediaDosValores = 24.34567009;
        let numeroDeValores = 223;

        // Comportamento
        const resultado = Operacoes.desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores)
        const esperado = 0.052244863766

        //Resultado esperado
        expect(resultado.nativo).to.not.be.equal(esperado)
    })

    it('Deve calcular do desvio, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.DesvioPadrao.forEach(({ valorIndividual, mediaDosValores, numeroDeValores, finalEsperado }) => {
            const resultado = Operacoes.desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores, finalEsperado)            
            expect(resultado.nativo).to.not.be.equal(finalEsperado)
        })
    })
})