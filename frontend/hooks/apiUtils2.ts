export const api = (path: string) => {
  // TODO: 環境変数でURLの出し分け処理
  return `http://localhost:3001${path}`;
};

// Create
export const createFetcher = <CreateRequest, CreateResponse>(
  url: string,
  { arg }: { arg: CreateRequest },
) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json() as Promise<CreateResponse>);
};

// FindAll
export const findAllFetcher = () => {};

// FindOne
export const findOneFetcher = <FindOneResponse>(url: string) => {
  return fetch(url).then((res) => res.json() as Promise<FindOneResponse>);
};

// Update
export const updateFetcher = <UpdateRequest, UpdateResponse>(
  url: string,
  { arg }: { arg: UpdateRequest },
) => {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json() as Promise<UpdateResponse>);
};

// Delete
export const deleteFetcher = (url: string) => {
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
};
