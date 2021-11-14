import React from 'react';
import { Tabs,Row,Tab} from 'react-bootstrap';



const TabContainer = ({tabs}) => {


    return(

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           
            {tabs.map((tab,index) => {

                return(
                    <Tab eventKey={tab.name} title={tab.name.toUpperCase()} key ={index}>
                        {tab.component}  
                    </Tab> 
                )


            }) }
      </Tabs>
    )
} 



export default TabContainer