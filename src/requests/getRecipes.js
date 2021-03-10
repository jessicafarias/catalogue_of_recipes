const getRecipes = async category => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  return response.json();
};

export default getRecipes;
