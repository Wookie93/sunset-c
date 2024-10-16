"use client";

import { InputField } from "@/components/Input";
import { TextareaField } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useTypeSafeFormState } from "@/app/contact/typeSafeForm";
import { contactSchema } from "@/app/contact/contactSchema";
import { clsx } from "clsx";
import { ErrorText } from "@/components/ErrorText";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);

	const [state, action] = useTypeSafeFormState(contactSchema, async (formData) => {
		if (form.current) {
			try {
				await emailjs.send(
					'service_9gsreds',
					'template_eryn7ux',
					{
						email: formData.email,
						message: formData.message,
					},
					'qjn4AcMuVzW8yEKN_'
				);
				form.current.reset();
			} catch (error) {
				console.error('FAILED...', error);
			}
		}
	});

	return (
		<form ref={form} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			action(new FormData(e.currentTarget));
		}}>
			<fieldset className="space-y-3">
				<InputField
					placeholder="Adres e-mail"
					type="email"
					name="email"
					aria-invalid={state?.errors.email ? "true" : "false"}
					className={clsx({
						"border-solid border-pink focus-visible:outline-pink":
							state?.errors.email,
					})}
				/>
				{state?.errors.email &&
					state?.errors.email.map((error) => (
						<ErrorText key={error}>{error}</ErrorText>
					))}
			</fieldset>
			<fieldset className="mb-6 mt-3 space-y-3">
				<TextareaField
					placeholder="Wiadomość"
					name="message"
					aria-invalid={state?.errors.message ? "true" : "false"}
					className={clsx({
						"border-solid border-pink focus-visible:outline-pink":
							state?.errors.message,
					})}
				/>
				{state?.errors.message &&
					state?.errors.message.map((error) => (
						<ErrorText key={error}>{error}</ErrorText>
					))}
			</fieldset>
			<Button
				type="submit"
				className="rounded-3xl bg-lion px-7 py-3.5 text-xs uppercase text-gray-900 transition-all duration-300 hover:bg-main-gold"
			>
				Wyślij
			</Button>
		</form>
	);
};
