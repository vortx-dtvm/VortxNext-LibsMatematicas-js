const assert = require("assert")
const myModule = require("..")
const { calculoPuPre, calculoPuPos } = myModule

let mediaCdi = 4.15
let dp = 36
let porcentagem = 0.06
let fatorDiAcumuladoAnterior = 1.00531743243777
let vne = 10006.00

const puFinal = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

const puEsperado = '10144.9266661423'

assert.strictEqual(puFinal, puEsperado)
