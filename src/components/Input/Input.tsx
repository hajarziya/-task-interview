import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
	label?: string;
	register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, register, ...rest }: Props) {
	return (
		<div className={styles.inputWrapper}>
			{label && <label>{label}</label>}
			<input className={styles.input} {...register} {...rest} />
		</div>
	);
}
