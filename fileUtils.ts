export const readFileContent = async (fileName: string): Promise<string> => {
  const decoder = new TextDecoder("utf-8");

  return new Promise(async (resolve, reject) => {
    try {
      const content = decoder.decode(await Deno.readFile(fileName));
      resolve(content);
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        reject(`File ${fileName} not found!`);
        return;
      }
      reject();
    }
  });
};
