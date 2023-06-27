
const request = require('supertest');
const app = require('../../index.js');

describe('Pruebas de la API', () => {
  test('GET', async () => {
    const response = await request(app).get('/aviones');

    expect(response.statusCode).toBe(200);
  });

  test('GET byID', async () => {
    const response = await request(app).get('/aviones/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ 
      ID: 1,
      Modelo: '747',
      Fecha: '1968-02-09',
      CapacidadDeCarga: 112760,
      CapacidadDePasajeros: 660,
      Fabricante: 'Boeing' 
    });
  });

  test('POST /', async () => {
    const newPlane = {
      ID: 16,
      Modelo: 'A320neo', 
      Fecha: '2020-01-01', 
      CapacidadDeCarga: 40000, 
      CapacidadDePasajeros: 195, 
      Fabricante: 'Airbus'
    };
    const response = await request(app).post('/aviones/').send(newPlane);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ 
      ID: 16, 
      Modelo: 'A320neo', 
      Fecha: expect.any(String), 
      CapacidadDeCarga: 40000, 
      CapacidadDePasajeros: 195, 
      Fabricante: 'Airbus' 
    });
  });

  test('DELETE/aviones/:ID', async () =>{
    const response = await request(app).delete('/aviones/16')

    expect(response.statusCode).toBe(204);
  });

  test('PUT/aviones/:ID', async () =>{
    const response = await await request(app).put('/aviones/10').send({Modelo: 'Pedro111'});

    expect(response.statusCode).toBe(200);
  });

  test('PUT/aviones/:ID', async () =>{
    const response = await await request(app).put('/aviones/10').send({Modelo: '77777777'});

    expect(response.statusCode).toBe(200);
  });
});