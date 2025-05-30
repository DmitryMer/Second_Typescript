import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Success.module.css";
import pizza from "../../public/pizza.png";

export function Success() {
  const navigate = useNavigate();
  return (
    <div className={styles["success"]}>
      <img src={pizza} alt="Изображение пиццы" />
      <div className={styles["text"]}>Ваш заказ успешно оформлен!</div>
      <Button appearence="big" onClick={() => navigate("/")}>
        Сделать новый
      </Button>
    </div>
  );
}
