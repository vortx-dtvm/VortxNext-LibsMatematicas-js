const { expect } = require('chai')
const { calculoValorCota} = require('./FormulaCotasDecimal')
const MassaDeTesteCotas = require('./MassaDeTeste/MassaDeTesteCotas')


describe('Deve realizar o calculo de cotas utilizando a lib Decimal', () => {

    it('Deve calcular o valor da cota, utilizando varios fundos', () => {
        // Comportamento
        const {ativos, passivos, numeroDeCotas, valorCotaEsperado} = MassaDeTesteCotas.massaSPS2
        const cotasFinal = Number(calculoValorCota(ativos, passivos, numeroDeCotas))

            // Resultado esperado
            expect(cotasFinal).to.be.equal(valorCotaEsperado)
    })
})