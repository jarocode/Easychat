import React from "react";

import Loader from "./Loader";

const ButtonLoader = ({ isSubmitting }) => (
  <>{isSubmitting && <Loader color="#fff" />}</>
);

export default ButtonLoader;
