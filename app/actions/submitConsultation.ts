'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitConsultation(data: {
  name: string;
  phoneNumber: string;
  desiredCar: string;
  purchaseMethod: string;
}) {
  try {
    const consultation = await prisma.consultation.create({
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber,
        desiredCar: data.desiredCar,
        purchaseMethod: data.purchaseMethod,
      },
    });
    return { success: true, consultation };
  } catch (error) {
    console.error('Error creating consultation:', error);
    return { success: false, message: 'Something went wrong.' };
  }
}
