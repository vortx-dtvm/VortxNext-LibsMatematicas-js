const { expect } = require('chai')
const { performance } = require('perf_hooks')

const libs = [
    { nome: 'Nativo', lib: require('./FormulaPu') },
    { nome: 'Big', lib: require('./FormulaPuBig') },
    { nome: 'Decimal', lib: require('./FormulaPuDecimal') },
    { nome: 'MathJS', lib: require('./FormulaPuMath') },
    { nome: 'As-big', lib: require('../as-Big') }
]

describe('Deve realizar o calculo do PU PÔS FIXADO', () => {

    const { mediasCdi } = require('./MassaDeTeste/MassaDeTestePosFixado')

    describe('Deve realizar o calculo simples de PU', () => {
        let start
        let ultimoTeste
        const historicoTempoExecucao = []
        beforeEach(() => {
            start = performance.now()            
        })

        libs.map(implementacao => {

            return it(`Deve realizar benchmark de tempo do calculo de PU na lib ${implementacao.nome}`, () => {
                ultimoTeste = implementacao.nome

                const puFinal = implementacao.lib.calculoPuPos(
                    4.15,
                    0.06,
                    36,
                    1.005317432437760000,
                    10006)

                expect(puFinal).to.be.not.null
                expect(puFinal).to.be.not.undefined
            })

        })
        afterEach(() => {
            const end = performance.now()
            const tempoExecucao = end - start
            historicoTempoExecucao.push({ nome: ultimoTeste, tempoExecucao: tempoExecucao })
            console.info(`Tempo de execução ${tempoExecucao}`)
        })

        after(() => {
            const menorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao < curr.tempoExecucao ? prev : curr)
            const maiorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao > curr.tempoExecucao ? prev : curr)
            const execucaoNativo = historicoTempoExecucao.find(execucao => execucao.nome === libs[0].nome)

            console.info(`\n`)
            console.info(`Tempo de execução ${execucaoNativo.nome} no tempo de ${execucaoNativo.tempoExecucao}`)
            console.info(`Melhor tempo de execução ${menorTempo.nome} no tempo de ${menorTempo.tempoExecucao}`)
            console.info(`Pior tempo de execução ${maiorTempo.nome} no tempo de ${maiorTempo.tempoExecucao}`)
            console.info(`\n`)
        })
    })


    describe('Deve realizar o calculo de PU ultilizando a massa de teste', () => {
        let start
        let ultimoTeste
        const historicoTempoExecucao = []
        beforeEach(() => {
            start = performance.now()
        })

        libs.map(implementacao => {

            return it(`Deve realizar benchmark de tempo do calculo de PU na lib ${implementacao.nome}`, () => {
                ultimoTeste = implementacao.nome

                let porcentagem = 0.06;
                //let fatordiacumuladoantes = 1.00000000;
                let vne = 10000;

                // Comportamento

                let fatorDiAcumuladoAnterior = 1.00000000;
                let mediaCdiDIA = 1.00000000;


                mediasCdi.forEach((mediaCdi, i) => {
                    let dp = i + 1;

                    const puFinal = implementacao.lib.calculoPuPos(
                        mediaCdiDIA,
                        porcentagem,
                        dp,
                        fatorDiAcumuladoAnterior,
                        vne)

                    mediaCdiDIA = mediaCdi;
                    fatorDiAcumuladoAnterior = fatorDiAcumuladoAnterior * implementacao.lib.calculoFatorDi(mediaCdiDIA);

                    expect(puFinal).to.be.not.null
                    expect(puFinal).to.be.not.undefined
                })
            })
        })
        afterEach(() => {
            const end = performance.now()
            const tempoExecucao = end - start
            historicoTempoExecucao.push({ nome: ultimoTeste, tempoExecucao: tempoExecucao })
            console.info(`Tempo de execução ${tempoExecucao}`)

        })

        after(() => {
            const menorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao < curr.tempoExecucao ? prev : curr)
            const maiorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao > curr.tempoExecucao ? prev : curr)
            const execucaoNativo = historicoTempoExecucao.find(execucao => execucao.nome === libs[0].nome)

            console.info(`\n`)
            console.info(`Tempo de execução ${execucaoNativo.nome} no tempo de ${execucaoNativo.tempoExecucao}`)
            console.info(`Melhor tempo de execução ${menorTempo.nome} no tempo de ${menorTempo.tempoExecucao}`)
            console.info(`Pior tempo de execução ${maiorTempo.nome} no tempo de ${maiorTempo.tempoExecucao}`)
            console.info(`\n`)

        })
    })
})

describe.only('Deve realizar o calculo do PU PRE FIXADO', () => {

    describe('Deve realizar o calculo simples de PU', () => {
        let start
        let ultimoTeste
        const historicoTempoExecucao = []
        beforeEach(() => {
            start = performance.now()
        })

        libs.map(implementacao => {

            return it(`Deve realizar benchmark de tempo do calculo de PU na lib ${implementacao.nome}`, () => {
                ultimoTeste = implementacao.nome

                const puFinal = implementacao.lib.calculoPuPre(
                    10017.47887,
                    0.158,
                    7)

                expect(puFinal).to.be.not.null
                expect(puFinal).to.be.not.undefined
            })

        })
        afterEach(() => {
            const end = performance.now()
            const tempoExecucao = end - start
            historicoTempoExecucao.push({ nome: ultimoTeste, tempoExecucao: tempoExecucao })
            console.info(`Tempo de execução ${tempoExecucao}`)
        })

        after(() => {
            const menorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao < curr.tempoExecucao ? prev : curr)
            const maiorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao > curr.tempoExecucao ? prev : curr)
            const execucaoNativo = historicoTempoExecucao.find(execucao => execucao.nome === libs[0].nome)

            console.info(`\n`)
            console.info(`Tempo de execução ${execucaoNativo.nome} no tempo de ${execucaoNativo.tempoExecucao}`)
            console.info(`Melhor tempo de execução ${menorTempo.nome} no tempo de ${menorTempo.tempoExecucao}`)
            console.info(`Pior tempo de execução ${maiorTempo.nome} no tempo de ${maiorTempo.tempoExecucao}`)
            console.info(`\n`)
        })
    })


    describe('Deve realizar o calculo de PU ultilizando a massa de teste', () => {
        let start
        let ultimoTeste
        const historicoTempoExecucao = []
        beforeEach(() => {
            start = performance.now()
        })

        libs.map(implementacao => {

            return it(`Deve realizar benchmark de tempo do calculo de PU na lib ${implementacao.nome}`, () => {
                ultimoTeste = implementacao.nome

                let porcentagem = 0.158;
                let vne = 10017.47887;

                for (i = 0; i < 10; i++) {
                    const puFinal = implementacao.lib.calculoPuPre(vne, porcentagem, i + 1)

                    expect(puFinal).to.be.not.null
                    expect(puFinal).to.be.not.undefined
                }
            })
        })

        afterEach(() => {
            const end = performance.now()
            const tempoExecucao = end - start
            historicoTempoExecucao.push({ nome: ultimoTeste, tempoExecucao: tempoExecucao })
            console.info(`Tempo de execução ${tempoExecucao}`)

        })

        after(() => {
            const menorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao < curr.tempoExecucao ? prev : curr)
            const maiorTempo = historicoTempoExecucao.reduce((prev, curr) => prev.tempoExecucao > curr.tempoExecucao ? prev : curr)
            const execucaoNativo = historicoTempoExecucao.find(execucao => execucao.nome === libs[0].nome)

            console.info(`\n`)
            console.info(`Tempo de execução ${execucaoNativo.nome} no tempo de ${execucaoNativo.tempoExecucao}`)
            console.info(`Melhor tempo de execução ${menorTempo.nome} no tempo de ${menorTempo.tempoExecucao}`)
            console.info(`Pior tempo de execução ${maiorTempo.nome} no tempo de ${maiorTempo.tempoExecucao}`)
            console.info(`\n`)

        })
    })
})
