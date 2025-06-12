import { useState } from "react";
import { fetchRandomUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setIsLoading(true);
    setError(null);

    try {
      const user = await fetchRandomUser();
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    submit,
  };
}
