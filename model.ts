export interface HSMRoute {
  path: string;
  method: string;
  responseText?: string;
  responseFile?: string;
}

export interface HSMConfig {
  routes: HSMRoute[];
  port: 8000;
}

export enum HSMMethod {
  GET = "get",
  POST = "post",
}
