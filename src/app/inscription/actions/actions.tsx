"use server";
import { RegistrationSchema } from "@/lib/definitions";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ActionState = {
  error?: string | null;
  errors?: {
    nom?: string[];
    prenom?: string[];
    email?: string[];
    telephone?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  fields?: {
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
    password?: string;
    confirmPassword?: string;
  };
};

export const registration = async (
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> => {

  const validatedFields = RegistrationSchema.safeParse({
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      error: "Les champs sont invalides",
      fields: {
        nom: formData.get("nom") as string,
        prenom: formData.get("prenom") as string,
        email: formData.get("email") as string,
        telephone: formData.get("telephone") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      },
    };
  }

  const { nom, prenom, email, telephone, password, confirmPassword } =
    validatedFields.data;

  if (password !== confirmPassword) {
    return {
      errors: {
        confirmPassword: ["Les mots de passe ne correspondent pas."],
      },
      error: "Les mots de passe ne correspondent pas.",
      fields: {
        nom,
        prenom,
        email,
        telephone,
        password,
        confirmPassword,
      },
    };
  }

  try {
    const user = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    
    return { error: "Une erreur est survenue lors de la création de l'utilisateur." };
  }

  revalidatePath("/inscrits");
  redirect("/inscrits");
};
