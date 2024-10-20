import { IComparePassword } from "../interfaces/IComparePassword";
import { IHashPassword } from "../interfaces/IHashPassword";
import bcrypt from "bcrypt";

export class HashPassword implements IHashPassword {
  hash(rawPassword: string): string {
    return bcrypt.hashSync(rawPassword, 10);
  }
}

export class ComparePassword implements IComparePassword {
  compare(rawPassword: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(rawPassword, hashedPassword);
  }
}
