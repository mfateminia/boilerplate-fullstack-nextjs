import { mongodb } from "../../services/mongodb"

export const insertOneTest = async(message: string) => {
    await mongodb.waitReady();
    await mongodb.db.collection('tests').insertOne({createdAt: new Date(), message});
}
