interface IStorage {
  getItem(key: string): string | null;

  setItem(key: string, value: string): void;

  removeItem(key: string): void;
}

export default abstract class Storage<T extends string> {
  private readonly storage: IStorage;

  protected constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  protected get(key: T): string | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: string): void {
    this.storage.setItem(key, value);
  }

  protected clearItem(key: T): void {
    this.storage.removeItem(key);
  }

  protected clearItems(keys: T[]): void {
    keys.forEach((key) => this.clearItem(key));
  }
}

export class LocalStorage extends Storage<string> {
  public constructor() {
    super();
  }

  public override get(key: string): string | null {
    return super.get(key);
  }

  public override set(key: string, value: string) {
    super.set(key, value);
  }

  public override clearItem(key: string) {
    super.clearItem(key);
  }

  public override clearItems(keys: string[]) {
    super.clearItems(keys);
  }
}

