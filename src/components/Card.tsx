import { ReactNode } from "react";
import style from "../styles/components/card.module.scss";

type cardProps = {
  children: ReactNode;
  variant: "thumbnail" | "detail" | "transparent";
};

function Card({ children, variant }: cardProps) {
  return (
    <div className={`${style.cardContainer} ${style[variant]}`}>{children}</div>
  );
}

export default Card;
