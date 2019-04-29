import React from "react"

class RouteAnilyzeTable extends React.Component {
    
    
    
                                            render () {
                                                console.log(this.props)
                                                        
                                                       return(
                                                           <React.Fragment>
                                                                        <div className="seebox col-12">
                                                                    
                                                                    <h2>Route </h2>
                                                                      
                                                                    
                                                                      <table className="table table-bordered">                              
                                                                      
                                                                            <thead>
                                                                              <tr>
                                                                                <th>{this.props.routes[0].name}</th>
                                                                                <th>pump</th>
                                                                                <th>depart</th>
                                                                                <th>leavePlant</th>
                                                                              </tr>
                                                                            </thead>
                                                                            
                                                                            
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>John</td>
                                                                                <td>Doe</td>
                                                                                <td>John</td>
                                                                                <td>john</td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td>Mary</td>
                                                                                <td>Moe</td>
                                                                                <td>John</td>
                                                                                <td>mary</td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td>July</td>
                                                                                <td>Dooley</td>
                                                                                <td>John</td>
                                                                                <td>july@</td>
                                                                              </tr>
                                                                            </tbody>
                                                                            
                                                                            
                                                                      </table>
                                                                    
                                                                    
                                                                    </div>
                                                                </React.Fragment>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          
                                          
                                          


                      
export default RouteAnilyzeTable