import Image from "next/image";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Please enter FullName ..." />
          <input type="text" placeholder="Please enter Email..." />
          <input type="text" placeholder="Please enter Phone Number ..." />
          <textarea placeholder="Message..."></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
