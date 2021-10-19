import { Big } from 'as-big'

import { calculoPuPos, puPosResult } from '../Pu'


describe('Big JS', (): void => {
  describe('Deve realizar o calculo de pu pós-fixado', (): void => {

    test('Calcula o PU de dia corretamente', (): void => {
          let mediaCdi = 4.15;
          let dp = 36;
          let porcentagem = 0.06;
          let fatorDiAcumuladoAnterior = 1.00531743243777
          let vne = 10006.00

          const puFinal : puPosResult = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

          const spreadEsperado = Big.of(1.00835887163168)
          const diEsperado = Big.of(1.00016137008907)
          const diAcumuladoEsperado = Big.of(1.00547966060139)
          const fatorJurosEsperado = Big.of(1.01388433601262)
          const puEsperado = Big.of(10144.9266661423)
          
          expect<string>(puFinal.pu.toString()).toBe(puEsperado.toString())
          expect<string>(puFinal.spread.toString()).toBe(spreadEsperado.toString())
          expect<string>(puFinal.di.toString()).toBe(diEsperado.toString())
          expect<string>(puFinal.diAcumulado.toString()).toBe(diAcumuladoEsperado.toString())
          expect<string>(puFinal.fatorJuros.toString()).toBe(fatorJurosEsperado.toString())
    })
  });
});