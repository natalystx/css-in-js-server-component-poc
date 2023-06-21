import React from "react";
import { stack } from "..";
let memo: string[] = [];
let fileString = "";

const writeCssFile = (css: Record<string, string>[]) => {
  css.forEach((i) => {
    const key = Object.keys(i)?.pop() || "";

    if (fileString.includes(key)) return;
    if (memo.includes(key)) return;
    if (key) {
      fileString += `.${key}{${i[key]}}`;
      memo.push(key);
    }
  });

  return fileString;
};

const CSS = async () => {
  const css = writeCssFile(stack);
  return <style>{css}</style>;
};

export default CSS;
