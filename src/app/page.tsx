import Card from "./component/card";
import { css } from "@/app/lib/css";
import { cx } from "@emotion/css";
import Text from "./component/Text";

export default function Home() {
  let x = 0;
  return (
    <div>
      <Card id="blue" />
      <Text />
      <h1 className={css(`color: white; font-size: 32px`)}>test</h1>
      <div
        className={cx(
          "text-green-500",
          !x
            ? css(
                `width: 100px; height: 250px;  border-radius: 10px; background: pink;`
              )
            : css(
                `width: 100px; height: 250px;  border-radius: 10px; background: red;`
              )
        )}
      >
        ssssss
      </div>
    </div>
  );
}
