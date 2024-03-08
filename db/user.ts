import prisma from "@/app/lib/prisma";

export async function getUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
      });
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }