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
                                                                                <th>start</th>
                                                                                <th>pump</th>
                                                                                <th>depart</th>
                                                                                <th>leavePlant</th>
                                                                              </tr>
                                                                            </thead>
                                                                            
                                                                            
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>{route.to}</td>
                                                                                <td>{route.pump}</td>
                                                                                <td>{route.from}</td>
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