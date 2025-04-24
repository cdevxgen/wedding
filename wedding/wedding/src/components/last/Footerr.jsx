import Image from "next/image";
import styles from "./Footerr.module.css";
import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css';

const Footerr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Celebrate the union of [Couples Names]! Join us for our wedding ceremony, and your presence will make our day even more special. Your warm wishes are greatly anticipated as we embark on this joyous journey together.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FOR ORDERS 👨‍💻 CONTACT:</h1>
          <Link href={"https://wa.me/+918105114625"} className={styles.text1}>
          <span className={styles.whatsapp}><i className="fa fa-whatsapp"></i></span> WHATSAPP US
            <br /> YOUR, REQUIREMENT
            <br /> +91 8105114625
          </Link>
          <p className={styles.text}>
            2356 C. CDEVOPS #20.
            <br /> Karnataka, 572215
            <br /> 📱💬(+91) 8105114625
          </p>
        </div>
        <div className={styles.carding}>
          <h1 className={styles.titlel}>COPYRIGHT © 2024- C-DEVOPS!</h1>
        </div>
      </div>
    </div>
  );
};

export default Footerr;
