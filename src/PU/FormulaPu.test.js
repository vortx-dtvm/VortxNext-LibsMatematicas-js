const { expect } = require('chai')
const { calculoPuPos, calculoPuPre } = require('./FormulaPu')

describe('JavaScript Nativo', () => {

    describe('Deve realizar o calculo de pu pós-fixado', () => {

        it('Calcula o PU de dia corretamente', () => {
            let mediaCdi = 4.15;
            let dp = 36;
            let porcentagem = 0.06;
            let fatorDiAcumuladoAnterior = 1.00531743243777
            let vne = 10006.00

            const puPrimeiroDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

            console.table(puPrimeiroDia)

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
            puEsperado = 10149.9244551596

            expect(puSegundoDia.toFixed.spread).to.be.equal(spreadEsperado)
            expect(puSegundoDia.toFixed.di).to.be.equal(diEsperado)
            expect(puSegundoDia.toFixed.diAcumulado).to.be.equal(diAcumuladoEsperado)
            expect(puSegundoDia.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
            expect(puSegundoDia.toFixed.pu).to.be.equal(puEsperado)
        })

        it('Calcula de um periodo de um mês', () => {
            const { puEsperado, mediasCdi } = require('./MassaDeTeste/MassaDeTestePosFixado')
            const porcentagem = 0.06;
            const vne = 10000.00
            let fatorDiAcumuladoAnterior = 1.00000000
            const resultados = []

            for (dp = 1; dp < puEsperado.length; dp++) {
                let mediaCdi = mediasCdi[dp];

                const { toFixed, nativo, floorFigure } = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)
                resultados.push({ puEsperado: puEsperado[dp], finalToFixed: toFixed.pu, finalNativo: nativo.pu, finalFloorFigure: floorFigure.pu})
                expect(toFixed.pu).to.be.equal(puEsperado[dp])
                fatorDiAcumuladoAnterior = toFixed.diAcumulado
            }
            console.table(resultados)
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

            expect(resultadoPU.toFixed.fatorJuros).to.be.equal(fatorJurosEsperado)
            expect(resultadoPU.toFixed.pu).to.be.equal(puEsperado)

            expect(resultadoPU.nativo.fatorJuros).to.not.be.equal(fatorJurosEsperado)
            expect(resultadoPU.nativo.pu).to.not.be.equal(puEsperado)

            expect(resultadoPU.floorFigure.fatorJuros).to.be.equal(fatorJurosEsperado)
            expect(resultadoPU.floorFigure.pu).to.not.be.equal(puEsperado)
        })
    })
})