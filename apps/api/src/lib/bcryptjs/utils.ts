import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 10);

export const checkPassword = async (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);
