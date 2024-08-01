"use client";

import { InputField } from "@/components/Input";
import { TextareaField } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useTypeSafeFormState } from "@/app/contact/typeSafeForm";
import { contactSchema } from "@/app/contact/contactSchema";
import { clsx } from "clsx";
import { ErrorText } from "@/components/ErrorText";

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [state, action] = useTypeSafeFormState(contactSchema, async (data) => {
		console.log(data, "data");
		formRef.current?.reset();
	});
	return (
		<form ref={formRef} action={action}>
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
