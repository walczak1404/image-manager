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

   static async getSingleImageFromDatabase(id) {
      const db = await this.createDatabaseConnection();

      return await db.get("images", parseInt(id));
   }

   static async getImageNextToCurrent(direction, id) {
      const db = await this.createDatabaseConnection();

      let range;

      if(direction === "RIGHT") {
         range = IDBKeyRange.lowerBound(parseInt(id), true);
      } else if(direction === "LEFT") {
         range = IDBKeyRange.upperBound(parseInt(id), true);
      }

      const item = await db.get("images", range);

      if(item === undefined) throw new Error();

      return item;
   }

   static async deleteImageFromDatabase(image) {
      const db = await this.createDatabaseConnection();

      await db.delete("images", image);
   }
}

export default DatabaseHandler;