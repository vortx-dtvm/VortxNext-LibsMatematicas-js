const { expect } = require('chai')
const { performance } = require('perf_hooks')

const libs = [
    { nome: 'Nativo', lib: require('./FormulaPu') },
    { nome: 'Big', lib: require('./FormulaPuBig') },
    { nome: 'Decimal', lib: require('./FormulaPuDecimal') },
    { nome: 'MathJS', lib: require('./FormulaPuMath') }
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
                let mediaCdi = 4.15
                let dp = 36
                let porcentagem = 0.06
                let fatorDiAcumuladoAnterior = 1.005317432437760000
                let vne = 10006

                // Comportamento
                const puFinal = implementacao.lib.calculoPuPos(
                    mediaCdi,
                    porcentagem,
                    dp,
                    fatorDiAcumuladoAnterior,
                    vne)

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

describe('Deve realizar o calculo do PU PRE FIXADO', () => {

    const { mediasCdi } = require('./MassaDeTeste/MassaDeTestePreFixado')

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