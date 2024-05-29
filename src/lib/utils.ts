export function classFormatter(
  ...args: (string | undefined | { [key: string]: any })[]
): string {
  const style: string[] = [];

  args.forEach((className) => {
    if (!className) return;
    if (typeof className === "string") style.push(className.trim());
    else {
      Object.keys(className).forEach((classKey) => {
        if (className[classKey]) style.push(classKey.trim());
      });
    }
  });

  return style.join(" ");
}
