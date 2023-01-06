import express from 'express';
import bodyParser from 'body-parser'

const port = 6942;
const app = express();
const jsonParser = bodyParser.json()

let users = [
    { id: 1, name: "Medic", line: "Your existance is an insult for all of us!" },
    { id: 2, name: "Scout", line: "You can't run away from the fact that your dead!" },
    { id: 3, name: "Spy", line: "Isn't it your job to get rid of me?" },
    { id: 4, name: "Pyro", line: "mmmmph" },
    { id: 5, name: "Soldier", line: "Your a fool, thinking that someone with your pathetic IQ could defeat me!" },
    { id: 6, name: "Heavy", line: "You can't run away from the fact that your dead!" },
    { id: 7, name: "Sniper", line: "Wanker, wanker, wanker, wanker. (laugh)" },
    { id: 8, name: "Demoman", line: "Its a drunk, half-blind idiot with exposives! (laugh)" },
    { id: 9, name: "Engineer", line: "I'm wolverine mean, you son of a bitch" }
];

app.get("/", (req, res, next) => {
    res.status('200').json({
        users: users,
    });
});

app.post("/post", jsonParser, (req, res, next) => {

    console.log(req.body)
    users.push({ id: users.length + 1, ...req.body });
    res.status('400').json({ message: 'new user created' });
});

app.get("/:id", (req, res, next) => {
    const { id } = req.params;
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass.` })
    } else {
        res.status('200').json(users[parseInt(id) - 1]);
    }
});

app.patch("/:id", jsonParser, (req, res, next) => {
    const { id } = req.params;
    const { name, line } = req.body;

    const user = users.filter(cur => cur.id === parseInt(id))

    if (user.length === 0) {
        res.status(400).json({ message: 'not found' })
    }
    else {
        const filtered = users.filter(cur => cur.id !== parseInt(id));

        const updated = [...filtered, { name, line }];

        users = updated;

        res.status(200).json({ updated });
    }
});

app.delete("/:id", jsonParser, (req, res, next) => {
    const { id } = req.params;
    const user = users.filter(cur => cur.id === parseInt(id))

    if (user.length === 0) {
        res.status(400).json({ message: 'not found' })
    }
    else {
        const filtered = users.filter(cur => cur.id !== parseInt(id));

        users = filtered;

        console.log(filtered)

        res.status(200).json({ message: `user with ${req.params.id} id got killed ` })
    }
})

app.listen(port, () => {
    console.log(`<${port}> Another successfull seizure!`);
});