const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./route/taskRoute.js");
const personRoutes = require("./route/personRoutes.js");
const profileRoutes = require("./route/profileRoutes.js");
const projectRoutes = require("./route/projectRoutes.js");
const db = require("./database/db.js");

const app = express();
app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON
app.use("/api", taskRoutes);
app.use("/api", personRoutes);
app.use("/api", profileRoutes);
app.use("/api", projectRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
