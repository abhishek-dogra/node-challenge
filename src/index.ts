const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req:any, res:any) => {
  res.json({ message: "ping" });
});

require("./app/routes/routes.ts")(app);

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});