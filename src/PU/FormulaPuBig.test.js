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

        expect(puPrimeiroDia.spread).to.be.equal(spreadEsperado)
        expect(puPrimeiroDia.di).to.be.equal(diEsperado)
        expect(puPrimeiroDia.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puPrimeiroDia.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puPrimeiroDia.pu).to.be.equal(puEsperado)
        
        dp++
        fatorDiAcumuladoAnterior = puPrimeiroDia.diAcumulado
        vne = 10007.00

        const puSegundoDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        spreadEsperado = 1.00859205720279
        diEsperado = 1.00016137008907
        diAcumuladoEsperado = 1.00564191494378
        fatorJurosEsperado = 1.01428244780250
        puEsperado =  10149.9244551596
        
        expect(puSegundoDia.spread).to.be.equal(spreadEsperado)
        expect(puSegundoDia.di).to.be.equal(diEsperado)
        expect(puSegundoDia.diAcumulado).to.be.equal(diAcumuladoEsperado)
        expect(puSegundoDia.fatorJuros).to.be.equal(fatorJurosEsperado)
        expect(puSegundoDia.pu).to.be.equal(puEsperado)
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
