import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import menu from "../../public/menu-icon.svg";
import cart from "../../public/cart-icon.svg";
import avatar from "../../public/avatar.png";
import exit from "../../public/exit-icon.svg";
import Button from "../../components/Button/Button";

export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img
            className={styles["avatar"]}
            src={avatar}
            alt="аватар пользователя"
          />
          <div className={styles["name"]}>Антон Ларичев</div>
          <div className={styles["email"]}>alar@mail.ru</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src={menu} alt="иконка меню" />
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src={cart} alt="иконка корзины" />
            Корзина
          </Link>
        </div>
        <Button className={styles["exit"]}>
          <img src={exit} alt="иконка выхода"></img>
          Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
