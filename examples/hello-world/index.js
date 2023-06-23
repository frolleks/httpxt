const httpxt = require("httpxt");

const app = httpxt();

app.get("/", async (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(3000, async () => {
  console.log("Server is up!");
});
