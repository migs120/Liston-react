import React from "react"

class RouteAnilyzeForm extends React.Component {
    
                                          
                                              constructor(props) {
                                                                    super(props);
                                                                    this.handleSubmit = this.handleSubmit.bind(this);
                                                                  }
                                                                
                                              handleSubmit(e) {
                                                                //alert('The value is: ' + this.Route1.value);
                                                                let Value = {
                                                                    
                                                                             startTime:this.startTime.value,
                                                                             hourAim:this.hourAim.value,
                                                                             Route1:this.Route1.value,
                                                                             Route2:this.Route2.value,
                                                                             Route3:this.Route3.value,
                                                                             Route4:this.Route4.value,
                                                                             wash:this.wash.value
                                                                    
                                                                             }
                                                               
                                                                e.preventDefault();
                                                                
                                                                this.props.jojo(Value)
                                                              }

                                             // onChange = (e) => this.setState({state:this.value2} )
    
                                            render () {                                                                                                                            
                                                        
                                                       return(
                                                           <React.Fragment>
                                                                 <form    onSubmit={this.handleSubmit}   >
                                                                          <label >
                                                                            start time:{ ' '}
                                                                            <input type="time" ref={(input) => this.startTime = input} />
                                                                          </label><br/>
                                                                          
                                                                    
                                                                          <label>
                                                                            hours aim:{ ' '}
                                                                            <input type="time" ref={(input) => this.hourAim = input} />
                                                                          </label><br/>
                                                                   
                                                                          <label>
                                                                            Route 1 :{ ' '}
                                                                            <input type="string"  ref={(input) => this.Route1 = input}  />
                                                                          </label><br/>
                                                                  
                                                                          <label>
                                                                            Route 2 :{ ' '}
                                                                            <input type="string" ref={(input) => this.Route2 = input } />
                                                                          </label><br/>
                                                                 
                                                                          <label>
                                                                            Route 3 :{ ' '}
                                                                            <input type="string" ref={(input) => this.Route3 = input} />
                                                                          </label><br/>
                                                                    
                                                                          <label>
                                                                            Route 4 :{ ' '}
                                                                            <input type="string" ref={(input) => this.Route4 = input} />
                                                                          </label><br/>
                                                                    
                                                                        <label>
                                                                            Wash :{ ' '}
                                                                            <input type="time" ref={(input) => this.wash = input} />
                                                                          </label><br/>
                                                                         <input type="submit" value="Submit" />  
                                                                          
                                                                        
                                                                          
                                                                    </form> 
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </React.Fragment>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          

                      
export default RouteAnilyzeForm