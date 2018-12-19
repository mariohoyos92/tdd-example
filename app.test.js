const server = require("./server");
const request = require("supertest")(server);

describe("GET /cars", () => {
  it("Should retrieve an array of cars with make and model properties", async done => {
    const response = await request.get("/cars");
    expect(response.status).toBe(200);
    const body = response.body;
    expect(body.cars).toBeInstanceOf(Array);
    body.cars.forEach(car => {
      expect(car).toHaveProperty("make");
      expect(car).toHaveProperty("model");
    });
    done();
  });
});
