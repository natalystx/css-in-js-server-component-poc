import React from "react";
import { cx } from "@emotion/css";
import { css } from "@/app/lib/css";

type X = {
  id?: string;
};
const Card = ({ id }: X) => {
  return (
    <div className={cx("w-[200px] h-[200px] bg-red-500", css(`color: ${id};`))}>
      Card
    </div>
  );
};

export default Card;
