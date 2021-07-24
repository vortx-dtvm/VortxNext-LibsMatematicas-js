const { expect } = require('chai')
const { calculoValorCota} = require('./FormulaCotas')
const MassaDeTesteCotas = require('./MassaDeTeste/MassaDeTesteCotas')


describe('Deve realizar o calculo de cotas utilizando o javascript nativo', () => {

    it('Deve calcular o valor da cota, utilizando varios fundos', () => {
        // Comportamento
        const {ativos, passivos, numeroDeCotas, valorCotaEsperado} = MassaDeTesteCotas.massaSPS2
        const cotasFinal = calculoValorCota(ativos, passivos, numeroDeCotas)

            // Resultado esperado
            expect(cotasFinal).to.be.equal(valorCotaEsperado)
    })
})