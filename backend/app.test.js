import request from "supertest";
import app from "./app.js";

describe("post request and validation", () => {
  it("post succces", function (done) {
    request(app)
      .post("/users/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
      .expect({ message: "create a user" });
  });
    it("get user success", function (done) {
      request(app)
        .get("/users/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done)
        .expect({ message: "get one user" });
    });
    it("put user success", function (done) {
      request(app)
        .put("/users/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done)
        .expect({ message: "update a user" });
    });
});
