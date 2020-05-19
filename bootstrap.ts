import {
  Server,
  Request,
  Response,
} from "https://deno.land/x/rute/mod.ts";

import { errorLog, warnLog } from "./logger.ts";

import { HSMRoute, HSMMethod } from "./model.ts";
import { readFileContent } from "./fileUtils.ts";

export default class Boostrap {
  public static async boost(app: Server) {
    // Load configs
    readFileContent("./config.json").then((fileContent) => {
      const config = JSON.parse(fileContent);
      config.routes.map(async (route: HSMRoute) => {
        let response = route.responseText || "";
        if (typeof route.responseFile !== "undefined") {
          try {
            const contentFromFile = await readFileContent(route.responseFile);
            response = contentFromFile;
          } catch (ex) {
            warnLog(
              `The file ${route.responseFile} hasn't been found, empty reponse for "${route.path}"`,
            );
          }
        }

        switch (route.method.toLowerCase()) {
          case HSMMethod.GET:
            app.get(route.path, (_1: Request, res: Response) => {
              res.set(response);
            });
            break;
          case HSMMethod.POST:
            app.post(route.path, (_1: Request, res: Response) => {
              res.set(response);
            });
            break;
        }
      });

      app.listen({ port: config.port });
    }).catch((error) => errorLog(error));
  }
}
