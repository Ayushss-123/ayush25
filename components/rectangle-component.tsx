import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./rectangle-component.module.css";

const RectangleComponent: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <button
      className={styles.rectangleButton}
      onClick={onRectangleButtonClick}
    />
  );
};

export default RectangleComponent;
