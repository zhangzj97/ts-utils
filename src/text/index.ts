export const joinText = (...list: (string | null)[]) => {
  return list.filter((i) => i !== null).join("\n");
};
