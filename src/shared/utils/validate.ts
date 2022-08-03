export const validateUsername = (userName: string) => {
  const splitedUsername = userName.split('');

  return splitedUsername.reduce((isValid, s) => {
    if (!isValid) {
      return false;
    }
    if (Number.isInteger(Number(s)) || s === ' ') {
      return false;
    }
    return true;
  }, true);
};
