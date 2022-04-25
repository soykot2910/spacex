export const fetchData = async (setData) => {
  let res = await fetch(`https://api.spacexdata.com/v3/launches`);
  let data = await res.json();
  setData(data);
};
