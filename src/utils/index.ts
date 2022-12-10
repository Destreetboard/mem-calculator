export const preformat = (eqn: string) => {
  return eqn.replace(/x/g, "*").replace(/÷/g, "/").replace(/\(/g, "*(");
};

export const removeLastStringChar = (char: string) => {
  return char.replace(/.$/, "");
};
