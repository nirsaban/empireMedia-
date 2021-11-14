import TableComponent from '../ui/table-ui'
import Select from '../ui/selector-ui'


const TableView = ({data,handleChange,options}) => {



    const tableData =   {
                         headers:["Date","Price"],
                         data:data['data'].map(item => {
                             return {
                                 date:item['Date'],
                                 price:item['Close']
                             }
                         })
                        }

    return(
        <div>
            <Select options = {options} handleChange = {handleChange}/>
            <TableComponent  data = {tableData}/>
        
        </div>
    )


}



export default TableView