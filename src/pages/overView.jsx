import React from "react";
import Header from '../component/header'
import TabContainer from '../component/tab'
import GraphView from '../component/graph-view'
import TableView from '../component/table-view'
import { Container,Row} from 'react-bootstrap';






const OverView = ({prices,data,setTime}) =>{


const selectTimeOptions = ['1 minute', '5 minutes','1 hour', '1 week']

const handleChange = (time) => {
    var timeToset = {};
    if(time == '1 minute'){
        timeToset={type:'histominute',count:1}
    }else if(time == '5 minutes'){
        timeToset = {type:'histominute',count:5}
    }else if(time == '1 hour'){
        timeToset = {type:'histohour',count:1}
    }else if(time == '1 week'){
        timeToset = {type:'histoday',count:7}
    }
    setTime(timeToset)
}

const tabsData = [
                    {
                    name:"Graph",
                    component:<GraphView data = {data}
                             options = {selectTimeOptions}
                             handleChange= {handleChange}/>
                    },
                    {
                    name:"history",
                    component:<TableView data = {data}
                              options = {selectTimeOptions}
                              handleChange= {handleChange}/>
                    }
                ]

return (
    <Container fluid className="d-flex algin-items-center mt-2 flex-column ">
        <Row >
            <Header data = {prices} />
        </Row>
         <Row>
           <TabContainer tabs = {tabsData} />
        </Row>
    </Container>

    )


}












export default OverView