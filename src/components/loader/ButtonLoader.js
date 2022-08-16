import React from "react";
import { color } from "theme";

import Loader from "./Loader";

const ButtonLoader = ({ isSubmitting }) => (
  <>{isSubmitting && <Loader color={color.white} />}</>
);

export default ButtonLoader;
