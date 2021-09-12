const { expect } = require('chai')
const { calculoPuPos, calculoFatorDi, calculoPuPre } = require('./FormulaPu')

describe('Deve realizar o calculo de pu incorretamente de um ativo pós-fixado utilizando o javascript nativo', () => {

    it('Deve calcular o PU ultilizando js nativo e metodos auxiliares', () => {
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.00531743243777
        let vne = 10006.00

        const puPrimeiroDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        const spreadEsperado = 1.00835887163168
        const diEsperado = 1.00016137008907
        const diAcumuladoEsperado = 1.00547966060139
        const fatorJurosEsperado = 1.01388433601262
        const puEsperado = 10144.9266661423 

        expect(puPrimeiroDia.toFixed.spread).to.be.equal(spreadEsperado)
        expect(puPrimeiroDia.toFixed.di).to.be.equal(diEsperado)
        expect(puPrimeiroDia.toFixed.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puPrimeiroDia.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.toFixed.pu).to.be.equal(puEsperado)

        expect(puPrimeiroDia.nativo.spread).to.not.be.equal(spreadEsperado)
        expect(puPrimeiroDia.nativo.di).to.not.be.equal(diEsperado)
        expect(puPrimeiroDia.nativo.diAcumulado).to.not.be.equal(diAcumuladoEsperado)
        expect(puPrimeiroDia.nativo.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.nativo.pu).to.not.be.equal(puEsperado)

        expect(puPrimeiroDia.floorFigure.spread).to.be.equal(spreadEsperado)
        expect(puPrimeiroDia.floorFigure.di).to.not.be.equal(diEsperado)
        expect(puPrimeiroDia.floorFigure.diAcumulado).to.not.be.equal(diAcumuladoEsperado)
        expect(puPrimeiroDia.floorFigure.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.floorFigure.pu).to.not.be.equal(puEsperado)
    })

    it('Deve calcular o PU corretamente ultilizando o fator acumulado de outro calculo', () => {
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.00531743243777
        let vne = 10006.00

        const puPrimeiroDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        let spreadEsperado = 1.00835887163168
        let diEsperado = 1.00016137008907
        let diAcumuladoEsperado = 1.00547966060139
        let fatorJurosEsperado = 1.01388433601262
        let puEsperado = 10144.9266661423 

        expect(puPrimeiroDia.toFixed.spread).to.be.equal(spreadEsperado)
        expect(puPrimeiroDia.toFixed.di).to.be.equal(diEsperado)
        expect(puPrimeiroDia.toFixed.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puPrimeiroDia.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.toFixed.pu).to.be.equal(puEsperado)
        
        dp++
        fatorDiAcumuladoAnterior = puPrimeiroDia.toFixed.diAcumulado
        vne = 10007.00

        const puSegundoDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        spreadEsperado = 1.00859205720279
        diEsperado = 1.00016137008907
        diAcumuladoEsperado = 1.00564191494378
        fatorJurosEsperado = 1.01428244780250
        puEsperado =  10149.9244551596
        
        expect(puSegundoDia.toFixed.spread).to.be.equal(spreadEsperado)
        expect(puSegundoDia.toFixed.di).to.be.equal(diEsperado)
        expect(puSegundoDia.toFixed.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puSegundoDia.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puSegundoDia.toFixed.pu).to.be.equal(puEsperado)
    })
})

describe('Deve realizar o calculo de pu incorretamente de um ativo pré-fixado utilizando o javascript nativo', () => {

    it('Deve calcular o PU', () => {
        let dp = 7;
        let porcentagem = 0.158;
        let vne = 10017.47887;


        const puPrimeiroDia = calculoPuPre(vne, porcentagem, dp)

        const fatorJurosEsperado = 1.004083157
        const puEsperado = 10058.3818089704

        expect(puPrimeiroDia.toFixed.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.toFixed.pu).to.not.be.equal(puEsperado)

        expect(puPrimeiroDia.nativo.fatorJuros).to.not.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.nativo.pu).to.not.be.equal(puEsperado)

        expect(puPrimeiroDia.floorFigure.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.floorFigure.pu).to.not.be.equal(puEsperado)
    })
})
