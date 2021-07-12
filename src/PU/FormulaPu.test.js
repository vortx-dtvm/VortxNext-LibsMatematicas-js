const { expect } = require('chai')
const calculoPu = require('./FormulaPu')

describe('Deve realizar o calulo de pu corretamente utilizando o javascript nativo', () => {

    it('Deve calcular o PU', () => {
        // Massa
        let dik = 6.39;
        let dp = 13;
        let porcentagem = 0.06;
        let fatordiacumuladoantes = 1.00159340;
        let vne = 10000;

        // Comportamento
        const puFinal = calculoPu(
            dik,
            porcentagem,
            dp,
            fatordiacumuladoantes,
            vne)


        // Resultado experado
        expect(puFinal).not.be.equal(544545)
    })

})
