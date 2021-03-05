const getInstrucion = async dish => {
  const url = `//https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  return response.json();
};

export default getInstrucion;