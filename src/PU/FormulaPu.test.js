const { expect } = require('chai')
const calculoPu = require('./FormulaPu')

describe('Deve realizar o calculo de pu corretamente utilizando o javascript nativo', () => {

    it('Deve calcular o PU', () => {
        // Massa
        let dik = 6.39;
        let dp = 20;
        let porcentagem = 0.06;
        let fatordiacumuladoantes =1.00272534;
        let vne = 10000;

        // Comportamento
        const puFinal = calculoPu(
            dik,
            porcentagem,
            dp,
            fatordiacumuladoantes,
            vne)


        // Resultado esperado
        expect(puFinal).to.be.equal(10075.35750000)
    })

})
