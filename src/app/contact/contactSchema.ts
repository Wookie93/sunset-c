import * as z from "zod";

export const contactSchema = z.object({
	email: z
		.string({
			required_error: "Adres e-mail jest wymagany",
		})
		.email("Adres e-mail jest nieprawidłowy"),

	message: z
		.string({
			required_error: "Wiadomość jest wymagana",
		})
		.min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
