export const filterCityList = data => {
  return data.filter(obj => obj.type === 'city');
};

export const filterPlaces = (data, city) => {
  return data.filter(obj => obj.city === city);
};

export const formatDate = date => {
  const milliseconds = Date.now() - Date.parse(date);
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
};
