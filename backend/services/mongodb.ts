import {MongoClient, Db, MongoClientOptions} from 'mongodb';
import {config} from '../config';
// import assert from 'assert';

export class MongoDb {
  //@ts-ignore
  public db: Db;
  //@ts-ignore
  private client: MongoClient;
  private indexes: { collection: string; index: any }[] = [];
  private promises: any[] = [];

  constructor() {
    this.init();
  }

  public async init() {
    const url = 'mongodb://localhost:27017';

    const clientConfig: MongoClientOptions = {
      useUnifiedTopology: true,
    };

    try {
      this.client = await MongoClient.connect(url, clientConfig);

      console.debug('MongoDB client connected');
      this.db = this.client.db(config.mongo.dbName);

      this.indexes.forEach(({ collection, index }) => {
        this.db.collection(collection).createIndex(index);
      });
      this.promises.forEach(resolve => resolve());
    } catch (e) {
      console.warn('MongoDB client connect failed. Retrying...');
      // console.warn(e);
      // await waitForSomeSeconds(1500);
      this.init();
    }
  }

  public addIndex(collection: string, index: any) {
    this.indexes.push({ collection, index });
  }

  public async waitReady() {
    if (this.db) {
      return Promise.resolve();
    }
    return new Promise(resolve => this.promises.push(resolve));
  }

  public get isConnected(): boolean {
    return this.client && this.client.isConnected();
  }

  public async close(): Promise<void> {
    return this.client && this.client.close();
  }
  
} 