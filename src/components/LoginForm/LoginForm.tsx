"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { fetchRandomUser } from "@/lib/api/submitUser";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

export default function LoginForm() {
	const { register, handleSubmit } = useForm<{ phone: string }>();
	const router = useRouter();

	async function onSubmit() {
		const user = await fetchRandomUser();
		localStorage.setItem("user", JSON.stringify(user));
		router.push("/dashboard");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("phone", {
					required: "Phone is required",
					pattern: {
						value: /^(\+98|0)?9\d{9}$/,
						message: "Invalid Iranian phone number",
					},
				})}
				type="tel"
				placeholder="شماره موبایل"
			/>
			<Button type="submit">ورود</Button>
		</form>
	);
}
