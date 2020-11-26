import { database } from "../firebase";

const db = database.ref("/categories");

class CategoryDataService {
  
  getByKey(key) {
    return db.document(key);
  }

  getAll() {
    return db;
  }

  create(category) {
    return db.push(category);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new CategoryDataService();
