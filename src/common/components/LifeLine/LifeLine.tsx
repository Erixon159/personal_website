import * as React from "react";
import styles from "./LifeLine.module.css";

interface LifeLineProps {
  width: string;
  height: string;
}

export const LifeLine: React.FC<LifeLineProps> = ({ width, height }) => {
  const calculatePolyline = (width: string, height: string) => {
    const width_integer: number = parseInt(width);
    const height_integer: number = parseInt(height);
    
    return `${0.002453125 * width_integer} ${0.499041666666667 * height_integer}, ${0.21875 * width_integer} ${0.499041666666667 * height_integer}, ${0.341296875 * width_integer} ${1 * height_integer}, ${0.671875 * width_integer} 0, ${0.78125 * width_integer} ${0.5 * height_integer}, ${1 * width_integer} ${0.5 * height_integer}`;
  } 
  
  return (
    <div className={styles.loading}>
      <svg width={width} height={height}>
        <polyline points={calculatePolyline(width, height)} className={styles.back}></polyline>
        <polyline points={calculatePolyline(width, height)} className={styles.front}></polyline>
      </svg>
    </div>
  );
};
