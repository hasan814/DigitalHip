import LoginFormPage from "@/components/elements/LoginForm/LoginFormPage";
import { handlerGithubLogin } from "@/utils/action";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handlerGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginFormPage />
      </div>
    </div>
  );
};

export default LoginPage;
