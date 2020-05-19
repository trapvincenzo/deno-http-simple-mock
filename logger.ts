import iro, { bold, red, yellow } from "https://deno.land/x/iro/src/iro.ts";

export const errorLog = (log: string) => {
  console.log(iro("Error", red, bold) + ` ${log}`);
};

export const warnLog = (log: string) => {
  console.log(iro("WARN", yellow, bold) + ` ${log}`);
};
