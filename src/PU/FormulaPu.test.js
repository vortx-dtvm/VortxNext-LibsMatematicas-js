const { expect } = require('chai')
const { calculoPuPos, calculoFatorDi, calculoPuPre } = require('./FormulaPu')

describe.only('Deve realizar o calculo de pu incorretamente de um ativo pós-fixado utilizando o javascript nativo', () => {

    it.only('Deve calcular o PU', () => {
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

        expect(puFinal.toFixed.spread).to.be.equal(spreadEsperado)
        expect(puFinal.toFixed.di).to.be.equal(diEsperado)
        expect(puFinal.toFixed.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puFinal.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puFinal.toFixed.pu).to.be.equal(puEsperado)

        expect(puFinal.nativo.spread).to.not.be.equal(spreadEsperado)
        expect(puFinal.nativo.di).to.not.be.equal(diEsperado)
        expect(puFinal.nativo.diAcumulado).to.not.be.equal(diAcumuladoEsperado)
        expect(puFinal.nativo.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puFinal.nativo.pu).to.not.be.equal(puEsperado)

        expect(puFinal.floorFigure.spread).to.be.equal(spreadEsperado)
        expect(puFinal.floorFigure.di).to.not.be.equal(diEsperado)
        expect(puFinal.floorFigure.diAcumulado).to.not.be.equal(diAcumuladoEsperado)
        expect(puFinal.floorFigure.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puFinal.floorFigure.pu).to.not.be.equal(puEsperado)
    })
})

describe('Deve realizar o calculo de pu incorretamente de um ativo pré-fixado utilizando o javascript nativo', () => {

    it('Deve calcular o PU', () => {
        let dp = 7;
        let porcentagem = 0.158;
        let vne = 10017.47887;


        const puFinal = calculoPuPre(vne, porcentagem, dp)

        const fatorJurosEsperado = 1.004083157
        const puEsperado = 10058.3818089704

        expect(puFinal.toFixed.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puFinal.toFixed.pu).to.not.be.equal(puEsperado)

        expect(puFinal.nativo.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puFinal.nativo.pu).to.not.be.equal(puEsperado)

        expect(puFinal.floorFigure.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puFinal.floorFigure.pu).to.not.be.equal(puEsperado)
    })
})
