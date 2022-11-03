import type { NextPage } from "next";
import { Button, Icon } from "@mui/material";
import RectangleComponent from "../components/rectangle-component";
import RectangleComponent3 from "../components/rectangle-component3";
import RectangleComponent2 from "../components/rectangle-component2";
import RectangleComponent1 from "../components/rectangle-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameDiv}>
      <RectangleComponent />
      <RectangleComponent3 />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <RectangleComponent2 />
      <textarea className={styles.rectangleTextarea} />
      <RectangleComponent1 />
      <Button
        className={styles.buttonContainedTextAndIco}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Button
      </Button>
      <Button
        className={styles.buttonOutlinedTextAndIcon}
        variant="outlined"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Button
      </Button>
      <Button
        className={styles.buttonContainedText}
        variant="contained"
        color="primary"
      >
        Button
      </Button>
    </div>
  );
};

export default FrameComponent;
