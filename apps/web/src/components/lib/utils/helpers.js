export const getURL = () => {
  const url =
    process?.env?.BASE_URL && process.env.BASE_URL !== ""
      ? process.env.BASE_URL
      : "http://localhost:3000";
  return url.includes("http") ? url : `https://${url}`;
};

export const postData = async ({ url, data }) => {
  console.log("posting,", url, data);

  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("Error in postData", { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs) => {
  var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};
