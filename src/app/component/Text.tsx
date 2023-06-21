"use client";

import React, { useState } from "react";
import { css } from "../lib/css";

const Text = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>show text || use client</button>

      {show && (
        <h1 className={css(`color: green; font-weight: 700px;`)}>show</h1>
      )}
    </div>
  );
};

export default Text;
