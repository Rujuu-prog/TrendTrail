import bcryptjs from 'bcryptjs';
import prisma from '@/app/lib/prisma';
import { handleError } from '@/app/lib/utils';

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    handleError(error);
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    handleError(error);
  }
}

export async function createUser(name: string, email: string, password: string) {
  try {
    // hash化
    const hashedpassword = await bcryptjs.hash(password, 10);
    // 登録済みか判定
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        isSuccess: false,
        error: {
          message: 'This email address is already registered.',
        },
      };
    }
    // ユーザー作成
    await prisma.user.create({
      data: {
        name,
        email,
        hashedpassword,
      },
    });
    return {
      isSuccess: true,
      message: 'success sign up.',
    };
  } catch (error) {
    handleError(error);

    return {
      isSuccess: false,
      error: {
        message: 'Failed sign up.',
      },
    };
  }
}
