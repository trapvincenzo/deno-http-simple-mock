import {
  Server,
} from "https://deno.land/x/rute/mod.ts";
import Boostrap from "./bootstrap.ts";

const app: Server = new Server();

Boostrap.boost(app);
