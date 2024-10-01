import express from "express";
const app = express();
const PORT = ENV_VARS.PORT

app.use(express.json());
app.use( express.static('public'));
app.use(cookieParser());

import cookieParser from "cookie-parser";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";


import authRoutes from "./routes/authRoute.js";
import movieRoutes from "./routes/movieRoute.js";
import tvRoutes from "./routes/tvRoute.js";
import searchRoutes from "./routes/searchRoute.js";
import { protectRoute } from "./middleware/protectRoute.js";


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);

app.listen(PORT, () => {
  console.log(`listen port number ${PORT}`);
  connectDB();
});

