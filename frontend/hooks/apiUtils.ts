export const getFetcher = <GetResponse>(url: string) => {
  return fetch(url).then((res) => res.json() as Promise<GetResponse>);
};

export const putFetcher = <PutRequest, PutResponse>(
  url: string,
  { arg }: { arg: PutRequest },
) => {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json() as Promise<PutResponse>);
};

// TODO: deleteとpostも対応する
