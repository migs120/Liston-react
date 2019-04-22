import React from "react"

class RouteAlilyze extends React.Component {
                                            render () {
                                                        
                                                       return(
                                                           
                                                              <div>
                                                                    <form>
                                                                          <label >
                                                                            start time:{ ' '}
                                                                            <input type="time" name="start time" />
                                                                          </label>
                                                                          
                                                                    </form>
                                                                    
                                                                     <form>
                                                                          <label>
                                                                            hours aim:{ ' '}
                                                                            <input type="number" name="hourAim" />
                                                                          </label>
                                                                    </form>  
                                                                    
                                                                    
                                                                    
                                                                    
                                                                     <form>
                                                                          <label>
                                                                            Route 1 :{ ' '}
                                                                            <input type="string" name="Route1" />
                                                                          </label>
                                                                    </form>  
                                                                    
                                                                     <form>
                                                                          <label>
                                                                            Route 2 :{ ' '}
                                                                            <input type="string" name="Route2" />
                                                                          </label>
                                                                    </form>  
                                                                     <form>
                                                                          <label>
                                                                            Route 3 :{ ' '}
                                                                            <input type="string" name="Route3" />
                                                                          </label>
                                                                    </form>  
                                                                     <form>
                                                                          <label>
                                                                            Route 4 :{ ' '}
                                                                            <input type="string" name="Route4" />
                                                                          </label>
                                                                    </form>  
                                                                     <form>
                                                                    <label>
                                                                            Wash :{ ' '}
                                                                            <input type="boolen" name="Route4" />
                                                                          </label>
                                                                    </form> 
                                                                    
                                                                    
                                                                    <button type="button" style={buttonStyle} onClick={RunTime} >click</button>
                                                                    
                                                                    
                                                                    
                                                                    <div style={{display:'none'}}></div>
                                                                    
                                                                    
                                                                    
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