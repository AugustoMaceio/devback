import routes from "./src/routes/postRoutes.js";
import express from "express";

const app = express();
app.use(express.static("uploads")); // servir arq estáticos
routes(app);

app.listen(3000,() => {console.log("servidor escutando...");
});