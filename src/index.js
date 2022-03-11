require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Este es una API para el backend de proyecto de Kushki, esta escuchando en el puerto: ${port}`));
