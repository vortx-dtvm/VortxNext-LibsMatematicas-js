const { expect } = require('chai')
const { performance, PerformanceObserver } = require('perf_hooks')

const libs = [
    require('./FormulaPu'),
    require('./FormulaPuBig'),
    require('./FormulaPuDecimal'),
    require('./FormulaPuMath')
]

describe('Deve realizar o calculo auxiliares de todas as libs', () => {

    it('Deve calcular o Fator Di de todas as libs', () => {
        // Massa
        let mediaCdi = 4.15;

        const valorEsperado = 1.00016137008907

        libs.forEach(formulaPU => {
            const fatorDi = formulaPU.calculoFatorDi(mediaCdi);
            expect(fatorDi.toFixed(8)).to.be.equal(valorEsperado.toFixed(8))
        })
    })

    it.only('Deve realizar benchmark de tempo do calculo de PU em total as libs', () => {

        const observer = new PerformanceObserver(list => list.getEntries().forEach(entry => console.info(entry)));
        observer.observe({ buffered: true, entryTypes: ['measure'] });

        performance.mark('start');
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.005317432437760000;
        let vne = 10006;

        // Comportamento
        const puFinal = libs[0].calculoPuPos(
            mediaCdi,
            porcentagem,
            dp,
            fatorDiAcumuladoAnterior,
            vne)

        performance.mark('stop');

        performance.measure('Business Logic', 'start', 'stop');

        expect(true).to.be.equal(true)
    })
})
