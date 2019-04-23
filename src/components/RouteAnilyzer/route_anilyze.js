import React from "react"
import RouteAnilyzeForm from "./routeAnilyzeForm"
import RouteAnilyzeTable from "./routeAnilyzeTable"

class RouteAlilyze extends React.Component {
                                            render () {
                                                        
                                                       return(
                                                           
                                                              <div>
                                                                    
                                                                    <RouteAnilyzeForm/>
                                                                    
                                                                    <button type="button" style={buttonStyle} onClick={RunTime} >click</button>
                                                                    
                                                                    
                                                                    <br/><br/>
                                                                    
                                                                   <RouteAnilyzeTable/>
                                                                   
                                                                
                                                              </div>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          
                    
                    
                    
var buttonStyle = {
  padding: '7px 15px'

                    
    
}                                          
                                          
function RunTime(){
   
   console.log('runtime clicked')
    
    
}

                      
export default RouteAlilyze