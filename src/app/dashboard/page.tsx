"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
	const router = useRouter();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (!user) {
			router.push("/auth");
		}
	}, []);

	const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;
	const userData = user ? JSON.parse(user) : null;

	return (
		<div className={styles.wrapper}>
			<h1>Welcome, {userData?.name?.first || "User"} 👋</h1>
		</div>
	);
}
