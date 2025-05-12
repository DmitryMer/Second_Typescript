import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import logo from "../../public/logo.svg";

export function AuthLayout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["logo"]}></div>
      <img src={logo} alt="Логотип компании" />

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
