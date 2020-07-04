import { v4 as uuidv4 } from 'uuid';

export class StorageService {
  private key: string;

  constructor(key: string) {
    this.key = key;
    this.validateStorage();
  }

  private validateStorage(): void {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
  }

  set(data): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  get<T = any>(id: string): T | null {
    const storageData = this.list<T>();
    return storageData.find(s => (s as any)?.id === id);
  }

  list<T>(): T[] {
    return JSON.parse(localStorage.getItem(this.key));
  }

  add<T>(data: any): T {
    const storageData = this.list<T>();
    const instance = {...data, id: uuidv4()};
    storageData.push(instance);
    this.set(storageData);
    return instance as T;
  }

  update<T>(uuid: string, data): T {
    const storageData = this.list<T>();
    const index = storageData.findIndex(d => uuid === (d as any).id);
    storageData[index] = data;
    this.set(storageData);
    return data;
  }

  delete<T>(uuid: string): void {
    const storageData = this.list<T>();
    const index = storageData.findIndex(d => uuid === (d as any).id);
    storageData.splice(index, 1);
    this.set(storageData);
  }
}
