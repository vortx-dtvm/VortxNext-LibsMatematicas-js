const { expect } = require('chai')
const Operacoes = require('./OperacoesBig')
const MassaDeTeste = require('./MassaDeTeste')


describe('Deve realizar o calculo da curva Gaussiana utilizando  a lib Big', () => {

    it('Deve calcular o valor da curva, utilizando valor unitário', () => {
        // Massa
        let x = 520.506049;
        let media = 150.395710000;
        let desvioPadrao = 122.433292000;

        // Comportamento
        const resultado = Operacoes.calculaGaussiana(x, media, desvioPadrao)
        
        //Resultado esperado
        expect(resultado).to.be.equal(0.000033780275421913600)
        })

        it('Deve calcular o valor da curva, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Gaussiana.forEach(({ x, media, desvioPadrao, finalEsperado }) => {
            const resultado = Operacoes.calculaGaussiana(x, media, desvioPadrao)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar a lei Snell Descartes utilizando a lib Big', () => {

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
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo da divisão de logs utilizando a lib Big', () => {

    it('Deve calcular o valor da divisão, utilizando valor unitário', () => {
        // Massa
        let x = 36.534;
        let y = 25.08400000;

        // Comportamento
        const resultado = Operacoes.calculaLog(x, y)
        
        //Resultado esperado
        expect(resultado).to.be.equal(1.1166934448159)
        })

    it('Deve calcular o resultado da divisão, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Log.forEach(({ x, y, finalEsperado }) => {
            const resultado = Operacoes.calculaLog(x, y, finalEsperado)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo de Bhaskara utilizando a lib Big', () => {

    it('Deve calcular o valor da divisão, utilizando valor unitário', () => {
        // Massa
        let coef1 = 0.4554;
        let coef2 = 10.432;
        let coef3 = 1.2033;

        // Comportamento
        const resultado = Operacoes.calculaBhaskara(coef1, coef2, coef3)
        
        //Resultado esperado
        expect(resultado).to.be.equal(196.58986921924600)
        })

    it('Deve calcular o resultado da divisão das duas raízes, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Bhaskara.forEach(({ coef1, coef2, coef3, finalEsperado }) => {
            const resultado = Operacoes.calculaBhaskara(coef1, coef2, coef3, finalEsperado)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo de Juros Simples utilizando a lib Big', () => {
    
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
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo de Juros Compostos utilizando a lib Big', () => {

    it('Deve calcular o valor do juros, utilizando valor unitário', () => {
        // Massa
        let capital = 2300;
        let taxaJuros = 0.306;
        let numeroPeriodo = 19;

        // Comportamento
        const resultado = Operacoes.calculoJurosCompostos(capital, taxaJuros, numeroPeriodo)
        
        //Resultado esperado
        expect(resultado).to.be.equal(366984.902338320)
        })

    it('Deve calcular do juros, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.JurosCompostos.forEach(({ capital, taxaJuros, numeroPeriodos, finalEsperado }) => {
            const resultado = Operacoes.calculoJurosCompostos(capital, taxaJuros, numeroPeriodos, finalEsperado)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo de Amortização utilizando a lib Big', () => {

    it('Deve calcular o valor da prestação, utilizando valor unitário', () => {
        // Massa
        let capitalInicial = 1800;
        let taxaJuros = 0.09843;
        let numeroPeriodo = 3;

        // Comportamento
        const resultado = Operacoes.calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodo)
        
        //Resultado esperado
        expect(resultado).to.be.equal(721.80689825232300)
        })

    it('Deve calcular da prestação, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.Amortizacao.forEach(({ capitalInicial, taxaJuros, numeroPeriodo, finalEsperado }) => {
            const resultado = Operacoes.calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodo, finalEsperado)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})

describe('Deve realizar o calculo de Desvio Padrão utilizando a lib Big', () => {

    it('Deve calcular o valor do desvio, utilizando valor unitário', () => {
        // Massa
        let valorIndividual = 2345;
        let mediaDosValores = 2222;
        let numeroDeValores = 46;

        // Comportamento
        const resultado = Operacoes.desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores)
        
        //Resultado esperado
        expect(resultado).to.be.equal(18.1353606070523)
        })

    it('Deve calcular do desvio, utilizando varios valores nos parâmetros', () => {
        MassaDeTeste.DesvioPadrao.forEach(({ valorIndividual, mediaDosValores, numeroDeValores, finalEsperado }) => {
            const resultado = Operacoes.desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores, finalEsperado)
            expect(resultado).to.be.equal(finalEsperado)
        })
    })
})