
const request = require('supertest');
const app = require('../../index.js'); 

describe('Pruebas de la API', () => {
  test('GET', async () => {
    const response = await request(app).get('/pasajeros');
    
    expect(response.statusCode).toBe(200);
  });

  test('GET byID', async () => {
    const response = await request(app).get('/pasajeros/8');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ 
    Apellido: expect.any(String),
    FechaNacimiento: expect.any(String),
    IdPasajero: expect.any(Number),
    IdVuelo: expect.any(Number),
    Nombre: expect.any(String) });
  });


  test('POST /', async () => {
    const newPasajero = { 
      Nombre:'Asarkier', 
      Apellido: 'Palomar', 
      FechaNacimiento: '2020-01-01', 
      IdVuelo:6 
    };
    const response = await request(app).post('/pasajeros').send(newPasajero);
    
    expect(response.statusCode).toBe(201);
   });

  test('DELETE /pasajeros/:IdPasajeros', async () => {
    const response = await request(app).get('/pasajeros');
    const pasajeros = response.body;
    const ultimoPasajero = pasajeros[pasajeros.length - 1];
    const res = await request(app).delete(`/pasajeros/${ultimoPasajero.IdPasajero}`);
    
    expect(res.statusCode).toEqual(204);
  });

  test('PUT/pasajeros/:IdPasajero', async () =>{
    const response = await  request(app).put('/pasajeros/9').send({Nombre: 'Pablo'});

    expect(response.statusCode).toBe(200);
  });

  test('PUT/pasasjeros/:IdPasajero', async () =>{
    const response = await  request(app).put('/pasajeros/9').send({Nombre: 'Diego'});

    expect(response.statusCode).toBe(200);
  });
});
