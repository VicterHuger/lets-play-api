import { Photo } from "@prisma/client";

export type TypePhotoInsert = Omit<Photo, "id" | "createdAt" | "updatedAt">;