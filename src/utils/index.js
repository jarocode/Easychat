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

export const getTime = () => {
  const dt = new Date();
  let hours = dt.getHours();
  let minute = dt.getMinutes();
  hours = hours % 12 || 12;
  minute = minute.toString().length == 2 ? minute : `0${minute}`;
  return `${hours}:${minute}pm `;
};
