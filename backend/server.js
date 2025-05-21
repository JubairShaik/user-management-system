import cookieparser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import AuthAdmin from "./Routes/AdminRoute.js";
import AuthRoutes from "./Routes/Auth.js";
import DbCon from "./Utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

DbCon();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173", // your local frontend
    ],
  })
);

app.use(cookieparser());

app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AuthAdmin);

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
