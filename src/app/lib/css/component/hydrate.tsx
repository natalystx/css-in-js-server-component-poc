"use client";
import React, { useEffect } from "react";
import { hydrateCss } from "@/app/lib/css";

const Hydrate = () => {
  useEffect(() => {
    hydrateCss();
  }, []);
  return <div></div>;
};

export default Hydrate;
