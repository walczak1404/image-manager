import { openDB } from 'idb';

class DatabaseHandler {
   static async createDatabaseConnection() {
      const db = await openDB("ImagesDB", 1, {
         upgrade(db) {
            const store = db.createObjectStore("images", {keyPath: "imgId", autoIncrement: true});
            store.createIndex("source", "source");
         }
      });
   
      return db;
   }

   static async addImagesToDatabase(images) {
      const db = await this.createDatabaseConnection();

      for(const image of images) {
         await db.add("images", {
            source: image
         });
      }
   }

   static async getImagesFromDatabase() {
      const db = await this.createDatabaseConnection();

      return await db.getAllFromIndex("images", "source");
   }
}

export default DatabaseHandler;