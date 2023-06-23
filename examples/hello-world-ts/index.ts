import veloxum from "veloxum";

const app = veloxum();

app.get("/", async (req, res) => {
  res.end("hello world!");
});

app.listen(3000, async () => {
  console.log("Server is up!");
});
