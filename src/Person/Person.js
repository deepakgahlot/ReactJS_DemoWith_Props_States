import React from 'react'
import './person.css'
const Person=(props)=>{
    return ( 
    <div className="color">
           <table>
          <tr>
              <td>{props.age}</td>
              <td>{props.name}</td>                         
              <td>{props.children}</td>
              </tr>
      </table>
      <input type="text" onChange={props.cval} placeholder="Type here for 2 way binding"/>
      </div> 
    )       
    }
    

export default Person