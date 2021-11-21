// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../db/db"
export default async function handler(req, res) {
 
  const { db } = await connectToDatabase();
  console.log(db);
  const data = await db.collection("startup_log").find({}).limit(20).toArray();
  res.status(200).json(data)
}
