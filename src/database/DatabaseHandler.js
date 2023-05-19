import { openDB } from 'idb';

class DatabaseHandler {
   static async createDatabaseConnection() {
      try {
         const db = await openDB("ImagesDB", 1, {
            upgrade(db) {
               const store = db.createObjectStore("images", {keyPath: "imgId", autoIncrement: true});
               store.createIndex("source", "source");
            }
         });
      
         return db;
      } catch(e) {
         throw new DOMException("Failed to connect with database");
      }
   }

   static async addImagesToDatabase(images) {
      try {
         const db = await this.createDatabaseConnection();

         for(const image of images) {
            await db.add("images", {
               source: image
            });
         }
      } catch(e) {
         throw new DOMException("Failed to add images");
      }
   }

   static async getImagesFromDatabase() {
      try {
         const db = await this.createDatabaseConnection();

         return await db.getAllFromIndex("images", "source");
      } catch(e) {
         throw new DOMException("Failed to load images");
      }
   }

   static async getSingleImageFromDatabase(id) {
      try {
         const db = await this.createDatabaseConnection();

         return await db.get("images", parseInt(id));
      } catch(e) {
         throw new DOMException("Failed to load image");
      }
   }

   static async getImageNextToCurrent(direction, id) {
      try {
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
      } catch(e) {
         throw new DOMException("Failed to load next image");
      }
   }

   static async deleteImageFromDatabase(image) {
      try {
         const db = await this.createDatabaseConnection();

         await db.delete("images", image);
      } catch(e) {
         throw new DOMException("Failed to delete image");
      }
   }
}

export default DatabaseHandler;