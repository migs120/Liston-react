import React from "react"

class RouteAnilyzeForm extends React.Component {
                                            render () {
                                                        
                                                       return(
                                                           <React.Fragment>
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
                                                                </React.Fragment>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          
                                          
                                          


                      
export default RouteAnilyzeForm