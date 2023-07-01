import * as React from "react";
import { Bebas_Neue } from '@next/font/google';
import styles from "./GlitchButton.module.css";

interface GlitchButtonProps {
  href: string;
  title: string;
}

export const glitch = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

export const GlitchButton: React.FC<GlitchButtonProps> = ({ href, title }) => {
  return (
    <a href={href} className={[styles['glitch-button'], glitch.className].join(' ')}>
      {title}
    </a>
  );
};
