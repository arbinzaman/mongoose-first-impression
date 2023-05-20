import mongoose from "mongoose";
import app from "./app"
const port:number = 5000;
// database connection
async function practice() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(`👌Database Connect Successfully`);
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
  } catch (err) {
    console.log(`Fail to connect Database`, err);
  }
}

practice()





