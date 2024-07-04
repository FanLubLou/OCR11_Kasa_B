const fetchData = async (fileName) => {
    try {
      const data = await import(`../data/${fileName}`);
      return data.default;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export { fetchData };
  