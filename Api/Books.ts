import { client } from "../db/database.ts";
import { Books } from "../interface/interface.ts";

const db = client.database("db_books");
const tBooks = db.collection("books");

const getAllbooks = async ({ response }: { response: any }) => {
  const books: Books[] = await tBooks.find();
  response.body = {
    success: true,
    data: books,
  };
};

const getOnebook = async (
  { params, response }: { params: any; response: any },
) => {
  console.log(params);

  let Book: Books = await tBooks.findOne({
    "_id": {
      "$oid": params.id,
    },
  });
  response.body = {
    success: true,
    data: Book,
  };
};

const postOneBook = async (
  { params, request, response }: { params: any; request: any; response: any },
) => {
  const result = await request.body();
  const bookfix: Books = result.value;
  const results = await tBooks.insertOne({
    title: bookfix.title,
    description: bookfix.description,
    price: bookfix.price,
  });
  response.body = {
    success: true,

    msg: "Anda berhasil Menambah",
  };
};

const putOneBook = async ({ params, request, response }: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const result = await request.body();
  const book: Books = result.value;
  const results = await tBooks.updateOne({
    "_id": { "$oid": params.id },
  }, {
    $set: {
      "title": book.title,
      "description": book.description,
      "price": book.price,
    },
  });
  response.body = {
    success: true,
    msg: "Anda Berhasil mengubah",
  };
};

const deleteOneBook = async (
  { params, response }: { params: any; response: any },
) => {
  let result = await tBooks.deleteOne({
    "_id": { "$oid": params.id },
  });
  response.body = {
    success: true,
    msg: "Anda Berhasil Menghapus",
  };
};

export { getAllbooks, getOnebook, postOneBook, putOneBook, deleteOneBook };
