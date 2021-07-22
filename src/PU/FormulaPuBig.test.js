const { expect } = require('chai')

const { calculoPuPos, calculoFatorDi, calculoPuPre } = require('./FormulaPuBig')
const { mediasCdi, puEsperado } = require('./MassaDeTeste/MassaDeTestePosFixado')
const { puEsperadoPre } = require('./MassaDeTeste/MassaDeTestePreFixado')

describe('Deve realizar o calculo de pu incorretamente de um ativo pós-fixado utilizando a lib Big', () => {

    it('Deve calcular o PU', () => {
        // Massa
        let mediaCdi = 4.15;
        let dp = 19;
        let porcentagem = 0.06;
        let fatorDiAcumulado = 1.002563554918;
        let vne = 10000;

        // Comportamento
        const puFinal = calculoPuPos(
            mediaCdi,
            porcentagem,
            dp,
            fatorDiAcumulado,
            vne)


        // Resultado esperado
        expect(puFinal.toFixed(12)).to.be.equal('10071.402932321400')
        expect(puFinal.toFixed(12)).to.be.equal(10071.402932321400.toFixed(12))
        expect(puFinal).to.be.equal(10071.402932321400)
    })

    it('Deve calcular o PU em um periodo de um mes, utilizando o fator acumulado', () => {
        // Massa
        //let dik = 6.39;
        //let dp = 20;
        let porcentagem = 0.06;
        //let fatordiacumuladoantes = 1.00000000;
        let vne = 10000;

        // Comportamento

        var i = 0;
        let fatorDiAcumulado = 1.00000000;
        let mediaCdi = 1.00000000;

        while (i < mediasCdi.length) {
            let dp = i + 1;

            const puFinal = calculoPuPos(
                mediaCdi,
                porcentagem,
                dp,
                fatorDiAcumulado,
                vne)

            mediaCdi = mediasCdi[i];
            fatorDiAcumulado = fatorDiAcumulado * calculoFatorDi(mediaCdi);
            // Resultado esperado
            expect(puFinal).to.be.equal(puEsperado[i])
            i++;
        }
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


    it('Deve calcular o PU em um periodo de um mes', () => {
        // Massa
        let porcentagem = 0.158;
        //let fatordiacumuladoantes = 1.00000000;
        let vne = 10017.47887;

        // Comportamento

        var i = 0;

        while (i < puEsperadoPre.length) {
            let dp = i + 1;

            const puFinalPre = calculoPuPre(
                vne, porcentagem, dp)

            // Resultado esperado
            expect(puFinalPre).to.be.equal(puEsperadoPre[i])
            expect(puFinalPre.toFixed(12)).to.be.equal((puEsperadoPre[i]).toFixed(12))
            i++;
        }
    })
})
