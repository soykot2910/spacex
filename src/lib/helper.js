export const fetchData = async (setData, limit, setLoading) => {
  setLoading && setLoading(true);
  try {
    let res = await fetch(
      `https://api.spacexdata.com/v3/launches?limit=${limit}`
    );
    let data =  await res.json();
    setData(data);
    setLoading && setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading && setLoading(false);
  }
};
