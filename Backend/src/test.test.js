// const test = require('./plus.js')
const userModel = require('./userModel.js');
const mongoose = require("mongoose");
const app = require("./index.js");
const request = require("supertest");

//setUp 
beforeAll(async () => {
    console.log("Ready To Test"),
    await setUpEnvironment();
});

//tearDown
afterAll(async () => {
    console.log("Test results was printed"),
    await mongoose.connection.close();
})

const demoman = [
    {
        _id: "-.. . -- --- -- .- -.",
        firstName: "Demoman",
        lastName: "Demoman's last nam",
    }
];

const setUpEnvironment = async () => {
    // bid mongoose connectionoo solihgui bol bodit datanuuda teardown hiihdee ustgah magadlaltai
    // await mongoose.connect("mongodb+srv://admin-news:admin-news@my-news-database.gtehxss.mongodb.net/?retryWrites=true&w=majority");
    await mongoose.connect(
        "mongodb+srv://newUser:pass1234@firstcluster.pxdozkq.mongodb.net/database?retryWrites=true&w=majority"
    );
    await User.deleteMany();
    demoman.map(async (el) => {
        await User.create(el);
    });
};

describe("User crud test", () => {
    it("Login test expect to success", async () => {
        const result = await request(app).get("/");
        expect(result.status).toBe(200);
    });

    it("Login test expect to failure", async () => {
        const result = await request(app).post("/user/login").send({
            firstName: "engi",
        });
        expect(result.status).toBe(400);
        expect(JSON.parse(result.text).message).toBe("Invalid User Detail!");
    });

    it("Login test expect to success", async () => {
        const result = await request(app).post("/user/login").send({
            firstName: "Engi",
            lastName: "engi's last name",
        });
        expect(result.status).toBe(200);
    })
})