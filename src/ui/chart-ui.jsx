import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'



const Chart = ({options}) =>{

    
    return(

        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}



export default Chart