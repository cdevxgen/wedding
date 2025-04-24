import Image from "next/image";
import styles from "./Footerr.module.css";
import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

const Footerr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/assets/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Celebrate the union of Mahesh & ShreeRaksha Join us for our wedding
            ceremony, and your presence will make our day even more special.
            Your warm wishes are greatly anticipated as we embark on this joyous
            journey together.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FOR ORDERS 👨‍💻 CONTACT:</h1>

          <Link
            href="https://www.instagram.com/cdevxgen/"
            className={styles.text1}
          >
            <span className={styles.iconista}>
              <i className="fa fa-instagram"></i>
            </span>{" "}
            @cdevxgen
          </Link>

          <Link href="https://wa.me/+918277052213" className={styles.text1}>
            <span className={styles.icon}>
              <i className="fa fa-whatsapp"></i>
            </span>{" "}
            WHATSAPP US
            <br /> YOUR REQUIREMENT
            <br /> +91 8277052213
          </Link>

          <p className={styles.text}>
            Cdevxgen Technologies Pvt Ltd.
            <br /> Turuvekere, 572227
            <br /> 📱💬 (+91) 8277052213
          </p>
        </div>

        <div className={styles.carding}>
          <h1 className={styles.titlel}>COPYRIGHT © 2024 - Cdevxgen!</h1>
        </div>
      </div>
    </div>
  );
};

export default Footerr;
