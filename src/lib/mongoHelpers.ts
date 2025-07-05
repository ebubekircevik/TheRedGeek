import clientPromise from "@/lib/mongodb";
import { ObjectId, Document, OptionalUnlessRequiredId } from "mongodb";

// Tüm dökümanları getir (generic tipli)
export async function getAllFromCollection<T>(
  collectionName: string
): Promise<T[]> {
  const client = await clientPromise;
  const db = client.db("theredgeek");
  return db.collection(collectionName).find({}).toArray() as Promise<T[]>;
}

// Tek döküman ekle
export async function insertToCollection<T extends Document>(
  collectionName: string,
  data: OptionalUnlessRequiredId<T>
) {
  const client = await clientPromise;
  const db = client.db("theredgeek");
  return db.collection<T>(collectionName).insertOne(data);
}

// Tek döküman güncelle
export async function updateInCollection<T>(
  collectionName: string,
  id: string,
  data: Partial<T>
) {
  const client = await clientPromise;
  const db = client.db("theredgeek");
  return db
    .collection(collectionName)
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

// Tek döküman sil
export async function deleteFromCollection(collectionName: string, id: string) {
  const client = await clientPromise;
  const db = client.db("theredgeek");
  return db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
}
