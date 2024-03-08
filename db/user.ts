import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import { handleError } from "@/app/lib/utils";

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
      handleError(error);
    }
  }
    }
  }