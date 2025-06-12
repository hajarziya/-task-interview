"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
	const router = useRouter();

	const userData = useMemo(() => {
		if (typeof window === "undefined") return null;
		const user = localStorage.getItem("user");
		return user ? JSON.parse(user) : null;
	}, []);

	useEffect(() => {
		if (!userData) {
			router.push("/auth");
		}
	}, [router, userData]);

	return (
		<div className={styles.wrapper}>
			<h1>Welcome, {userData?.name?.first || "User"} 👋</h1>
		</div>
	);
}
