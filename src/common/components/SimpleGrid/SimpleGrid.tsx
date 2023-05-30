import * as React from "react";
import styles from "./SimpleGrid.module.css";

interface SimpleGridProps {
  children: React.ReactNode;
}

export const SimpleGrid: React.FC<SimpleGridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
