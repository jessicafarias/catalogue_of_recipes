// https://www.themealdb.com/api/json/v1/1/categories.php

const getCategories = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  console.log(response);
  return response.json();
};

export default getCategories;
