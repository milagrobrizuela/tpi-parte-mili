const request = require("supertest");
const app = require("../../index.js");

describe('Pruebas de la API', () => {
  test('GET', async () => {
      const res = await request(app).get("/vuelos");   
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);   
      res.body.forEach((vuelo) => {
        expect(vuelo).toEqual(
          expect.objectContaining({
            IdVuelo: expect.any(Number),
            NombreVuelo: expect.any(String),
            FechaDespegue: expect.any(String),
            Precio: expect.any(Number),
            IdAvion: expect.any(Number),
            IdAeropuertoOrigen: expect.any(Number),
            IdAeropuertoDestino: expect.any(Number)
          })
        );
      });
  });

  test('GET byID', async () => {
      const res = await request(app)
        .get("/vuelos/2"); 
      
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(
        expect.objectContaining({
          IdVuelo: expect.any(Number),
          NombreVuelo: expect.any(String),
          FechaDespegue: expect.any(String),
          Precio: expect.any(Number),
          IdAvion: expect.any(Number),
          IdAeropuertoOrigen: expect.any(Number),
          IdAeropuertoDestino: expect.any(Number)
        })
      );
  });
  
  test('POST /', async () => {
      const res = await request(app)
        .post("/vuelos")
        .send({
          NombreVuelo: "Nuevo Vuelo",
          FechaDespegue: "2023-06-16",
          Precio: 150.50,
          IdAvion: 1,
          IdAeropuertoOrigen: 1,
          IdAeropuertoDestino: 2,
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(
        expect.objectContaining({
          IdVuelo: expect.any(Number),
          NombreVuelo: "Nuevo Vuelo",
          FechaDespegue: expect.any(String),
          Precio: 150.50,
          IdAvion: 1,
          IdAeropuertoOrigen: 1,
          IdAeropuertoDestino: 2,
        })
      );
  });
  
  test('PUT /vuelos/:IdVuelos', async () =>{
      const res = await request(app)
        .put("/vuelos/3")
        .send({
          NombreVuelo: "Vuelo Actualizado",
          FechaDespegue: "2023-06-16",
          Precio: 200.75,
          IdAvion: 2,
          IdAeropuertoOrigen: 2,
          IdAeropuertoDestino: 3,
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ message: "Vuelo 3 Actualizado" });
  });
  
  test('DELETE /vuelos/:IdVuelos', async () => {
    const response = await request(app).get('/vuelos');
    const vuelos = response.body;
    const ultimoVuelo = vuelos[vuelos.length - 1];
    const res = await request(app).delete(`/vuelos/${ultimoVuelo.IdVuelo}`);
    expect(res.statusCode).toEqual(204);
  });
  
})