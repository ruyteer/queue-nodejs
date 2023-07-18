import mongoose from "mongoose";

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log("mongodb connected");
}

main().catch((err) => console.log(err));

export default mongoose;
