"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/action";

import styles from "./LoginFormPage.module.css";
import Link from "next/link";

const LoginFormPage = () => {
  // ============= Router ==============
  const router = useRouter();

  // ============= FormState ==============
  const [state, formState] = useFormState(login, undefined);
  // ============= Effect ==============
  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  // ============= Rendering ==============
  return (
    <form action={formState} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href={"/register"}>
        Don&apos;t Have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginFormPage;
