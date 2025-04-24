import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import menu from "../../public/menu-icon.svg";
import cart from "../../public/cart-icon.svg";
import avatar from "../../public/avatar.png";
import exit from "../../public/exit-icon.svg";
import Button from "../../components/Button/Button";
import cn from "classnames";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src={menu} alt="иконка меню" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src={cart} alt="иконка корзины" />
            Корзина
          </NavLink>
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
