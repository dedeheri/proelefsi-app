import mongoose from "mongoose";

async function coonection() {
  try {
    const config = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(process.env.DATABASE_URL, config, (err) => {
      if (err) {
        console.log("here");
      }
    });
    console.log("database connecting");
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

export default coonection;
