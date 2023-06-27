const request = require("supertest");
const app = require("../../index.js");

describe("Tests de los endpoints", () => {
  test("GET", async () => {
    const response = await request(app).get("/pilotos/getAll");

    expect(response.statusCode).toBe(200);
  });

  test('GET by ID', async () => {
    const response = await request(app).get("/pilotos/getById/1"); 
    
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        Id: expect.any(Number),
        Nombre: expect.any(String),
        Apellido: expect.any(String),
        FechaNacimiento: expect.any(String),
        Nacionalidad: expect.any(String),
        IdVuelo: expect.any(Number)
      })
    );
});

  test("POST", async () => {
    const nuevoPiloto = {
      Id: 30,
      Nombre: "Milagro",
      Apellido: "Brizuela",
      FechaNacimiento: "2002-09-09",
      Nacionalidad: "Argentina",
      IdVuelo: 16
    };
  
    const response = await request(app).post("/pilotos").send(nuevoPiloto);
  
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      Id: 30,
      Nombre: "Milagro",
      Apellido: "Brizuela",
      FechaNacimiento: expect.any(String),
      Nacionalidad: "Argentina",
      IdVuelo: 16
    });
  });
  
  test("PUT", async () => {
    const response = await request(app).put("/pilotos/10").send({Nacionalidad: "Chile"});

    expect(response.statusCode).toBe(200);
  });
  
  test("DELETE", async () => {
    const response = await request(app).get("/pilotos/getAll");
    const pilotos = response.body;
    const ultimoPiloto = pilotos[pilotos.length - 1];
    const res = await request(app).delete(`/pilotos/${ultimoPiloto.Id}`);

    expect(res.statusCode).toEqual(204);
  });
});
