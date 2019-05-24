import React from "react"

class RouteAnilyzeTable extends React.Component {
    
    
    
                                            render () {
                                                console.log(this.props)
                                                        
                                                       return this.props.routes.map(
                                            
                                                                    (route) => (
                                                                                
                                                                                  <div key={route.key} className="seebox col-12">
                                                                    
                                                                    <h2>{route.name}</h2>
                                                                      
                                                                    
                                                                      <table className="table table-bordered">                              
                                                                      
                                                                            <thead>
                                                                              <tr>
                                                                                <th>arriveDairy</th>
                                                                                <th>startPumping</th>
                                                                                <th>leaveDairy</th>
                                                                                <th>arrivePlant</th>
                                                                                <th>leavePlant</th>
                                                                              </tr>
                                                                            </thead>
                                                                            
                                                                            
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>{route.arriveDairy}</td>
                                                                                <td>{route.startPumping}</td>
                                                                                <td>{route.leaveDairy}</td>
                                                                                <td>{route.arrivePlant}</td>
                                                                                <td>{route.leavePlant}</td>
                                                                              </tr>
                                                                           
                                                                            </tbody>
                                                                            
                                                                            
                                                                      </table>
                                                                    
                                                                    
                                                                    </div>         
                                                                                
                                                                               )
                                            
                                                                    );
                                                       
                                                       
                                               
                                                               
                                                      }
                                          }
                                          
                                          
                                          


                      
export default RouteAnilyzeTable