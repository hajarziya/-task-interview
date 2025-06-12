"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components";
import { Button } from "@/components";
import { isValidIranianPhone } from "@/lib";
import styles from "./LoginForm.module.scss";
import { useAuth } from "./useAuth";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<{ phone: string }>();

  const { isLoading, error, submit } = useAuth();

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <Input
        {...register("phone", {
          required: "Phone is required",
          validate: (value) =>
            isValidIranianPhone(value) || "Invalid Iranian phone number",
        })}
        type="tel"
        placeholder="شماره موبایل"
      />
      <Button disabled={isLoading} type="submit">
        {isLoading ? "در حال بررسی..." : "ورود"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
