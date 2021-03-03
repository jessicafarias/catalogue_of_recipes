// API PEXELS: 563492ad6f9170000100000188675169c73a412e9dccea75bb5d70a3

const getPhoto = async query => {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1&orientation=landscape&size=small`;
  const response = await fetch(url, {
    headers: {
      Authorization: '563492ad6f9170000100000188675169c73a412e9dccea75bb5d70a3',
    },
  });
  return response.json();
};

export default getPhoto;
