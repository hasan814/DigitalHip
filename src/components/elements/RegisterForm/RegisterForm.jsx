"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/utils/action";

import styles from "./RegisterForm.module.css";
import Link from "next/link";

const RegisterForm = () => {
  // ============= Router ==============
  const router = useRouter();

  // ============= FormState ==============
  const [state, formState] = useFormState(register, undefined);
  // ============= Effect ==============
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  // ============= Rendering ==============
  return (
    <form action={formState} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href={"/login"}>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
