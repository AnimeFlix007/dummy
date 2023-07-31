"use client";

import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);
  if (!display) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
