import React from "react";
import styles from "./styles.module.css";

export default function Button({
  message,
  type,
}: {
  message: string;
  type: string | null;
}) {
  return (
    <button className={type == "primary" ? styles.primary : styles.secondary}>
      {message}
    </button>
  );
}
