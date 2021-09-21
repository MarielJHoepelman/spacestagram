const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`;

const payload = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const fetcher = () => {
  return fetch(URL, payload).then((response) => {
    return response.json();
  });
};
