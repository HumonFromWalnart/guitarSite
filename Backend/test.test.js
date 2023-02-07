const request = require("supertest");
const User = require("./src/userModel");
const mongoose = require("mongoose");
const app = require("./index.js");
const dotenv = require("dotenv")

dotenv.config();

const uri = process.env.secure_link || ""

const demoUserData = [
  {
    _id: "62e893a5784f8957b14a8887",
    name: "Bat",
    password: "$2a$12$rykK8LahnZddi9LvK4XvdePpYzvtxSkib/wIGOqRXeuA/RCTXvoZ2"
  }
];

const setUpEnvironment = async () => {
  // bid mongoose connectionoo solihgui bol bodit datanuuda teardown hiihdee ustgah magadlaltai
  // await mongoose.connect("mongodb+srv://admin-news:admin-news@my-news-database.gtehxss.mongodb.net/?retryWrites=true&w=majority");
  await mongoose.connect(uri);
  await User.deleteMany();
  demoUserData.map(async (el) => {
    await User.create(el);
  });
};

// Set up the environment
beforeAll(async () => {
  await setUpEnvironment();
});

// Tear down the environment
afterAll(async () => {
  //   await User.deleteMany();
  mongoose.connection.close();
});

describe("User crud test", () => {
  it("Login test expect to success", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
  });

  it("Login test expect to failure", async () => {
    const result = await request(app).post("/user/login").send({
      name: "Bat",
    });
    expect(result.status).toBe(400);
  });

  it("Login test expect to success", async () => {
    const result = await request(app).post("/user/login").send({
      name: "Bat",
      password: "pass"
    });
    expect(result.status).toBe(200);
  });
});