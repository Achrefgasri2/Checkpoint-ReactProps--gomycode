import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
const profilecomponent = (props) => {
    return (
        <div>
             {props.children}
             <div style={{
        fontSize: "20px",
        fontFamily: '"Comic sans Ms", cursive , sans-serif',
        color: "white",
        fontStyle:"italic",
        textAlign:"center",
        borderStyle: "dashed",
        borderRadius: "5%",
        borderWidth: "5px"
        
      }}>
            <h2>FullName : {props.fullName} </h2>
            <h2>Bio :</h2>
            <h2> Diploma : {props.Bio.diploma}</h2>
            <h2> Skills : {props.Bio.skills} </h2>
            <h2> Arabic :{props.Bio.lang.Arabic} </h2>
               <h2> English : {props.Bio.lang.English} </h2>
                <h2> French : {props.Bio.lang.French} </h2>
            <h2> Profession: {props.Profession} </h2>
            <Button variant="danger" style={{ marginRight: "20px" }} onClick={() => props.handleName(props.fullName)}>Get the Name of the Profile</Button>
            </div>
          
            
            
           
        </div>
    )
}

export default profilecomponent
/********* PropTypes */
profilecomponent.propTypes = {
    fullName: PropTypes.string,
    
    skills: PropTypes.arrayOf(PropTypes.string),
    // lang: PropTypes.objectOf(PropTypes.string)
    Bio : PropTypes.shape({
        diploma : PropTypes.arrayOf(PropTypes.string),
        skills : PropTypes.arrayOf(PropTypes.string),
        lang: PropTypes.shape({
            Arabic : PropTypes.string, 
            English : PropTypes.string,
            French: PropTypes.string
        }),
        
    }),
    Profession :  PropTypes.string,
    handleName: PropTypes.func
}

/********* Default props */
profilecomponent.defaultProps = {
    fullName:  "No FullName" ,
    Bio : "No Bio",
    Profession : "No Profession"
   


}
