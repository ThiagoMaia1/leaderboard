export enum Endpoints {
  SCORES = 'scores',
  USER = 'users',
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
}

export function fetcher<ResponseType>(
  endpoint: Endpoints,
  method = Methods.GET,
  postBody?: unknown,
  options?: RequestInit,
) {
  return fetch(process.env.NEXT_PUBLIC_API_HOST + endpoint + '/?format=json', {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    method,
    body: postBody ? JSON.stringify(postBody) : null,
  })
    .then((data) => data.json())
    .then<ResponseType>((response) => response);
}
