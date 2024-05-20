import styles from "./RegisterPage.module.css";
import RegisterForm from "@/components/elements/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
