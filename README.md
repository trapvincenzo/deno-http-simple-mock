# DENO Http simple mock
Creates a server that returns mock data using a config file.

## Run it
`deno run --allow-net --allow-read  server.ts`

## Config file
These are the specs (`models.ts`)

```
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

```

## Config example
```
{
    "routes": [
        {
            "path": "/test",
            "method": "GET",
            "responseText": "{\"hello\":\"world\"}"
        },
        {
            "path": "/test2",
            "method": "GET",
            "responseFile": "./test2.json"
        }
    ],
    "port": 8000
}
```
