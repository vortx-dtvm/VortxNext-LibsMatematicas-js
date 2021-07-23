const { expect } = require('chai')
const { calculoValorCota} = require('./FormulaCotasMath')
const MassaDeTesteCotas = require('./MassaDeTeste/MassaDeTesteCotas')


describe('Deve realizar o calculo de cotas utilizando a lib Math', () => {

    it.only('Deve calcular o valor da cota, utilizando varios fundos', () => {
        // Comportamento
        const {ativos, passivos, numeroDeCotas, valorCotaEsperado} = MassaDeTesteCotas.massaSPS2
        const cotasFinal = calculoValorCota(ativos, passivos, numeroDeCotas)

            // Resultado esperado
            expect(cotasFinal).to.be.equal(valorCotaEsperado)
    })
})