const assert = require("assert")
const myModule = require("..")
const { calculoPuPre, calculoPuPos } = myModule

let mediaCdi = 4.15;
let dp = 36;
let porcentagem = 0.06;
let fatorDiAcumuladoAnterior = 1.00531743243777
let vne = 10006.00

const puFinal = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

const spreadEsperado = 1.00835887163168
const diEsperado = 1.00016137008907
const diAcumuladoEsperado = 1.00547966060139
const fatorJurosEsperado = 1.01388433601262
const puEsperado = '10144.9266661423'

// assert.strictEqual(puFinal.spread, spreadEsperado)
// assert.strictEqual(puFinal.di, diEsperado)
// assert.strictEqual(puFinal.diAcumulado, diAcumuladoEsperado)
// assert.strictEqual(puFinal.fatorJuros, fatorJurosEsperado)
// assert.strictEqual(puFinal, puEsperado)