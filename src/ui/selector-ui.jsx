import {DropdownButton,Dropdown} from 'react-bootstrap'




const Select = ({options,handleChange}) => {



    return(

        <DropdownButton id="dropdown-basic-button" title="Select Time" className ="m-5">
                {
                    options.map(option => {
                        return <Dropdown.Item onClick = {() => handleChange(option)} key = {option}>{option}</Dropdown.Item>
                    })
                }
            
      </DropdownButton>

    )



}

export default Select