import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static set(key: string, data): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T = any>(key: string, id: string): T | null {
    const storageData = this.list<T>(key);
    return storageData.find(s => (s as any)?.id === id);
  }

  list<T>(key: string): T[] {
    return JSON.parse(localStorage.getItem(key));
  }

  add<T>(key: string, data: any): T {
    const storageData = this.list<T>(key);
    const instance = {...data, id: uuidv4()};
    storageData.push(instance);
    StorageService.set(key, storageData);
    return instance as T;
  }

  update<T>(key: string, uuid: string, data): T {
    const storageData = this.list<T>(key);
    const index = storageData.findIndex(d => uuid === (d as any).id);
    storageData[index] = data;
    StorageService.set(key, storageData);
    return data;
  }
}
