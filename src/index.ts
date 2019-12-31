export class SomeModule {
  private key: string;
  private secret: string;

  constructor(key: string, secret: string) {
    this.key = key;
    this.secret = secret;
  }

  showPrivate(): string {
    return `key: ${this.key}, secret: ${this.secret}`;
  }
}
