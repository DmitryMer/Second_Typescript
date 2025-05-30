import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import menu from "../../public/menu-icon.svg";
import cart from "../../public/cart-icon.svg";
import avatar from "../../public/avatar.png";
import exit from "../../public/exit-icon.svg";
import Button from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";
import { useEffect } from "react";
import { RootState } from "@reduxjs/toolkit/query";

export function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img
            className={styles["avatar"]}
            src={avatar}
            alt="аватар пользователя"
          />
          <div className={styles["name"]}>{profile?.name}</div>
          <div className={styles["email"]}>{profile?.email}</div>
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
            <span className={styles["cart-count"]}>
              {" "}
              {items.reduce((acc, item) => (acc += item.count), 0)}
            </span>
          </NavLink>
        </div>
        <Button className={styles["exit"]} onClick={logout}>
          <img src={exit} alt="иконка выхода"></img>
          Выход
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
