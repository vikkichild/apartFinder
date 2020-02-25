export const filterCityList = data => {
  return data.filter(obj => obj.type === 'city');
};

export const filterPlaces = (data, city) => {
  return data.filter(obj => obj.city === city);
};
