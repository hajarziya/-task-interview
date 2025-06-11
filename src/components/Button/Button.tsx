import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

type Props = {
	children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
}
