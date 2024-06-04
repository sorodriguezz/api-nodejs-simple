const express = require("express");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();
const port = 3001;

app.use("/pokemon", pokemonRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
