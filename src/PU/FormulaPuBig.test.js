const { expect } = require('chai')

const { calculoPuPos, calculoFatorDi, calculoPuPre } = require('./FormulaPuBig')

describe('Deve realizar o calculo de pu incorretamente de um ativo pós-fixado utilizando a lib Big', () => {

    it('Deve calcular o PU', () => {
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.00531743243777
        let vne = 10006.00

        const puFinal = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        const spreadEsperado = 1.00835887163168
        const diEsperado = 1.00016137008907
        const diAcumuladoEsperado = 1.00547966060139
        const fatorJurosEsperado = 1.01388433601262
        const puEsperado = 10144.9266661423

        expect(puFinal.spread).to.be.equal(spreadEsperado)
        expect(puFinal.di).to.be.equal(diEsperado)
        expect(puFinal.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puFinal.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puFinal.pu).to.be.equal(puEsperado)
    })
})

describe('Deve realizar o calculo de pu incorretamente de um ativo pré-fixado utilizando a lib Big', () => {

    it('Deve calcular o PU', () => {
        // Massa
        let dp = 7;
        let porcentagem = 0.158;
        let vne = 10017.47887;

        // Comportamento
        const puFinal = calculoPuPre(
            vne,
            porcentagem,
            dp)


        // Resultado esperado
        expect(puFinal.toFixed(12)).to.be.equal('10058.38180897000')
        expect(puFinal.toFixed(12)).to.be.equal(10058.38180897000.toFixed(12))
        expect(puFinal).to.be.equal(10058.38180897000)
    })
})
