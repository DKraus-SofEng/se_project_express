const app = require("./app");

const { PORT = process.env.PORT || 3001 } = process.env;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on ${PORT}`);
});
