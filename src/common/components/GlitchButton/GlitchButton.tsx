import * as React from "react";
import styles from "./GlitchButton.module.css";

interface GlitchButtonProps {
  href: string;
  title: string;
}

export const GlitchButton: React.FC<GlitchButtonProps> = ({ href, title }) => {
  return (
    <a href={href} className={styles.glitchbutton}>
      {title}
    </a>
  );
};
