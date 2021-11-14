
import { Table,Row} from 'react-bootstrap';





const TableComponent = ({data}) => {


    return(
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {
                data.headers.map(header => {
                return(
                    <th key = {header}>{header}</th>

                )
            })
            }
          </tr>
        </thead>
        <tbody>
         {
             data.data.map(row => {
                 return(
                     <tr key = {row.date}>
                         <td>{row.date}</td>
                         <td>{row.price}</td>
                    </tr>
                 )
             })
         }

        </tbody>
      </Table>
    )

}


export default TableComponent