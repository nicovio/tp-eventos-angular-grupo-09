import { EventosPorFecha } from './eventos-segun-fecha.pipe';

describe('FechaEventoPipe', () => {
  it('create an instance', () => {
    const pipe = new EventosPorFecha();
    expect(pipe).toBeTruthy();
  });
});
