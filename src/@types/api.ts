interface ServerRequestSchema {
  url: string;
  token: string;
  mode: string;
  body: string | Record<string, any>;
  endpoint: string;
  method: string;
  server: string;
  accessToken: string;
  refreshToken: string;
}

export type ServerRequest = Partial<ServerRequestSchema>;
