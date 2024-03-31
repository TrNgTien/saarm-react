import * as crypto from 'crypto';

export class HashService {
  private static instance: HashService;
  private readonly algo: string;
  private readonly secret: string;

  constructor() {
    this.algo = 'aes-256-ctr';
    this.secret = process.env.APP_SECRET ?? '';
  }

  static getInstance(): HashService {
    if (!this.instance) {
      return new HashService();
    }
    return this.instance;
  }

  encrypt(text: string): string {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(this.algo, this.secret, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return `${iv.toString('hex')}.${encrypted.toString('hex')}`;
  }

  decrypt(hashed: string): string {
    const [ivHex, contentHex] = hashed.split('.');

    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algo, this.secret, iv);

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(contentHex, 'hex')),
      decipher.final(),
    ]);

    return decrypted.toString();
  }
}
