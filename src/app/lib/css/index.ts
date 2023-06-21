import aesjs from "aes-js";

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memo: Record<string, string> = {};
export let stack: Record<string, string>[] = [];

export const css = (cssString: string): string => {
  const text = cssString;
  const textBytes = aesjs.utils.utf8.toBytes(text);
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const encryptedBytes = aesCtr.encrypt(textBytes);
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  const className = global.window
    ? `css-client-${encryptedHex}`
    : `css-server-${encryptedHex}`;

  if (global.window) {
    setTimeout(() => hydrateCss(), 1);
  } else {
    stack.push({ [className]: cssString });
  }

  return className;
};

export const hydrateCss = () => {
  const html = document.querySelector("html");
  const style = document.createElement("style");
  const allClasses = document.querySelectorAll(`[class*="css-client"]`);

  allClasses.forEach((element) => {
    element.classList.forEach((name) => {
      if (name.includes("css-client-")) {
        const formatted = name.replace(/css-client-/g, "");
        if (memo[formatted]) return;
        const encryptedBytes = aesjs.utils.hex.toBytes(formatted);

        const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        const decryptedBytes = aesCtr.decrypt(encryptedBytes);

        const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        const styleTag = html?.getElementsByTagName("style");
        const styleString = `.${name}{${decryptedText}}`;
        memo[formatted] = styleString;
        if (styleTag?.length === 0) {
          style.innerHTML += `.${name}{${decryptedText}}`;
          html?.append(style);
        } else {
          styleTag!.item(0)!.innerHTML += styleString;
        }
      }
    });
  });
};
