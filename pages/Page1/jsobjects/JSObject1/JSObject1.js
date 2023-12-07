export default {
  // Dynamic data example
  fetchData() {
    const inputData = brand_ratio.data;

    const transformedData = inputData.map(item => {
      return {
        "x": item.brand_name,
        "y": item.count_total
      };
    });

    return transformedData;
  }
};
