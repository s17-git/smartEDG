import {z} from "zod";

export const RegistrationSchema = z.object({
    nom: z.string().min(3, "Le nom doit contenir au moins 3 caractères.").max(20),
    prenom: z.string().min(3, "Le prénom doit contenir au moins 3 caractères.").max(10),
    email: z.email("Veuillez entrer un email valide."),
    telephone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 caractères."),
    password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
    confirmPassword: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
})