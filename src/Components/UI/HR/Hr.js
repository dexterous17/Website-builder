import React from 'react'

function Hr(props) {
    const Mystyle = {
        position: "absolute",
        top:"13px",
        border: "1px solid",  
        width: "100%",
    }
    return (
        <hr style={Mystyle}/>
    )
}

export default Hr
