import express from "express";
import cors from "cors";
import morgan from "morgan";
import { sequelize } from "./database.js";
import { User } from "./models/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan());

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const port = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
