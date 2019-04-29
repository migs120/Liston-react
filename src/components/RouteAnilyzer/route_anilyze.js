import React from "react"
import RouteAnilyzeForm from "./routeAnilyzeForm"
import RouteAnilyzeTable from "./routeAnilyzeTable"


var RoutesAssign = {Route1:'nothing'}


class RouteAlilyze extends React.Component {
    
 
    
                                                             runTimeA = () => {
                                                                 
                                                                                 console.log('RuntimeA clicked')
                                                                                 
                                                                             }
                                                                             
                                                             state = {
                              
                                                                      routes:[ 
                                                                                {  name:'dairy1',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                },
                                                                                {  name:'dairy2',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                } 
                                                                                ]
                                                                                                            
                                                                    }
                                                             
    
                                            render () {
                                                        
                                                       return(
                                                           
                                                              <div>
                                                                    
                                                                    <RouteAnilyzeForm jojo={runTimeA}/>               
                                                                    
                                                                
                                                                    <br/><br/>
                                                                    
                                                                   <RouteAnilyzeTable routes={this.state.routes} />
                                                                   
                                                                
                                                              </div>
                                                           
                                                              ) 
                                                               
                                                      }
                                          }
                                          
                    
                                                               var Routes = [
                                                                              
                                                                                {  name:'dairy1',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                },
                                                                                {  name:'dairy2',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                },
                                                                                 {  name:'dairy3',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                },
                                                                                 {  name:'dairy4',
                                                                                    to:15,
                                                                                    pump:35,
                                                                                    from:15,
                                                                                    unload:40
                                                                                  
                                                                                }
                                                                              ]
                                                               
                                                               //var RoutesAssign;

                                                                function runTimeA(a){
                                                                    console.log(Routes.klompe,a)
                                                                    RoutesAssign = a
                                                                   RouteAlilyze.state = RoutesAssign
                                                                   //console.log(RouteAlilyze[0])
                                                                    console.log(RoutesAssign)
                                                                }
                      
export default RouteAlilyze