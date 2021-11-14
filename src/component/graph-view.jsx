
import Chart from '../ui/chart-ui'
import Select from '../ui/selector-ui'



const GraphView = ({data,handleChange,options}) => {


    const chartOptions = {
        title: {
          text: 'Last 30 Prices'
        },
        xAxis: {
            categories: data['data'].map(item => item['Date']),
        },
        series: [{
          data: data['data'].map(item => item['Close'])
        }]
      }


    return(
        <div>
            <Select options = {options} handleChange = {handleChange}/>
               <Chart options= {chartOptions}/>
        </div>
    )


}



export default GraphView