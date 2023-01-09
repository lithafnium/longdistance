import { ServerRequest } from "@app/@types/api";

const url = "http://127.0.0.1:5000"; // will move to env variables

export const apiGet = async (endpoint: String, req: ServerRequest) => {
  const response = await await fetch(`${url}${endpoint}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    return await res.json();
  });

  return response;
};

export const apiPost = async (endpoint: String, req: ServerRequest) => {
  const response = await fetch(`${url}${endpoint}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  }).then(async (res) => {
    return await res.json();
  });

  return { response };
};
