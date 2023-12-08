export default {
fetchData() {
  const inputData = brand_state.data;

  const brands = Object.keys(inputData[0]).slice(1); // Extract brand names
  const transformedData = {};

  brands.forEach((brand) => {
    transformedData[brand] = inputData.map((item) => Number(item[brand]));
  });

  return transformedData;
},
options : {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '4%',
    right: '15%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
		name:'Vehicle Count',
		nameLocation: 'middle', // Set the position of the x-axis title ('start', 'middle', or 'end')
    nameGap: 30 // Adjust the gap between the axis title and the axis line if needed
  },
  yAxis: {
    type: 'category',
    data: ['BR', 'KA', 'KL', 'Others', 'TN'],
		name:'State',
		 nameLocation: 'middle', // Set the position of the x-axis title ('start', 'middle', or 'end')
    nameGap: 30 // Adjust the gap between the axis title and the axis line if needed
  },
  series: [
    {
      name: 'Bajaj',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().bajaj,
			  sort: 'descending' 
    },
    {
      name: 'Hero',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().hero,
    },
    {
      name: 'Royal Enfield',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData()['Royal Enfield'],
    },
    {
      name: 'tvs',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().tvs,
    },
    {
      name: 'Honda',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().honda,
    },
		{
      name: 'Yamaha',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().yamaha,
    },
		{
      name: 'Others',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
				position: 'inside',
        rotate: 50
      },
      emphasis: {
        focus: 'series'
      },
        data: this.fetchData().others,
    },
  ]
}

}