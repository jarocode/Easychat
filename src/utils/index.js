/** load redux state */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    sessionStorage.removeItem("state");
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
/** save redux state */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};
