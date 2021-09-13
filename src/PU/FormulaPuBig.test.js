const { expect } = require('chai')

const { calculoPuPos, calculoPuPre } = require('./FormulaPuBig')

describe('Big JS', () => {

    describe('Deve realizar o calculo de pu pós-fixado', () => {

        it('Calcula o PU de dia corretamente', () => {
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

        it('Calcula o PU ultilizando fator acumulado de um dia anterior', () => {
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
            puEsperado = 10149.9244551596

            expect(puSegundoDia.spread).to.be.equal(spreadEsperado)
            expect(puSegundoDia.di).to.be.equal(diEsperado)
            expect(puSegundoDia.diAcumulado).to.be.equal(diAcumuladoEsperado)
            expect(puSegundoDia.fatorJuros).to.be.equal(fatorJurosEsperado)
            expect(puSegundoDia.pu).to.be.equal(puEsperado)
        })
    })

    describe('Deve realizar o calculo de pu de um ativo pré-fixado', () => {
        it('Calcula o PU de dia corretamente', () => {
            const dp = 7;
            const porcentagem = 0.158
            const vne = 10017.4788743413

            const resultadoPU = calculoPuPre(vne, porcentagem, dp)

            const fatorJurosEsperado = 1.00408315732975
            const puEsperado = 10058.3818166327

            expect(resultadoPU.fatorJuros).to.be.equal(fatorJurosEsperado)
            expect(resultadoPU.pu).to.be.equal(puEsperado)
        })
    })
})
