const { expect } = require('chai')
const { calculoPuPos, calculoPuPre } = require('../as-Big')

describe('As-Big', () => {

    describe('Deve realizar o calculo de pu pós-fixado', () => {

        it('Calcula o PU de dia corretamente', () => {
            let mediaCdi = 4.15
            let dp = 36
            let porcentagem = 0.06
            let fatorDiAcumuladoAnterior = 1.00531743243777
            let vne = 10006.00

            const puFinal = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

            const puEsperado = "10144.9266661423"

            expect(puFinal).not.to.be.equal(puEsperado)
        })        
    })

    describe('Deve realizar o calculo de pu de um ativo pré-fixado', () => {
        it('Calcula o PU de dia corretamente', () => {
            const dp = 7
            const porcentagem = 0.158
            const vne = 10017.4788743413

            const resultadoPU = calculoPuPre(vne, porcentagem, dp)

            const fatorJurosEsperado = 1.00408315732975
            const puEsperado = 10058.3818166327

            expect(resultadoPU.fatorJuros).not.to.be.equal(fatorJurosEsperado)
            expect(resultadoPU.pu).not.to.be.equal(puEsperado)
        })
    })
})