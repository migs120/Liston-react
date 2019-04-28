import React from "react"
import RouteAnilyzeForm from "./routeAnilyzeForm"
import RouteAnilyzeTable from "./routeAnilyzeTable"


var RoutesAssign = {Route1:'nothing'}


class RouteAlilyze extends React.Component {
    
 
    
                                                             runTimeA = () => {
                                                                 
                                                                                 console.log('RuntimeA clicked')
                                                                                 
                                                                             }
                                                            state = RoutesAssign
                                                             
    
                                            render () {
                                                        
                                                       return(
                                                           
                                                              <div>
                                                                    
                                                                    <RouteAnilyzeForm jojo={runTimeA}/>               
                                                                    
                                                                
                                                                    <br/><br/>
                                                                    
                                                                   <RouteAnilyzeTable routes={RoutesAssign} />
                                                                   
                                                                
                                                              </div>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          
                    
                                                               var Routes = {klompe:{to: 7, from:10},golob:{to:9,from:12}}
                                                               
                                                               //var RoutesAssign;

                                                                function runTimeA(a){
                                                                    console.log(Routes.klompe,a)
                                                                    RoutesAssign = a
                                                                   RouteAlilyze.state = RoutesAssign
                                                                   //console.log(RouteAlilyze[0])
                                                                    console.log(RoutesAssign)
                                                                }
                      
export default RouteAlilyze