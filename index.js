const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), 
() => console.log("La aplicación se ha iniciado en el puerto " + app.get("port"))  // Si se incia correctamente mostrará este mensaje por consola
);

app.use(require("./src/routes/index_rutas.js"));