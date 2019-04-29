import React from "react"
import RouteAnilyzeForm from "./routeAnilyzeForm"
import RouteAnilyzeTable from "./routeAnilyzeTable"





class RouteAlilyze extends React.Component {
    
    
    
    
 
    
runTimeA = (val) => {
 
               let a =  runTimeA(val)
                this.setState({routes:a})
             }
             
state = {
            routes:[
                        {  
                            key:1,
                            name:'dairyEapmple1',
                            to:15,
                            pump:35,
                            from:15,
                            unload:40
                          
                        },
                        {  
                            key:2,
                            name:'dairyEapmple2',
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
                    
                    <RouteAnilyzeForm jojo={this.runTimeA}/>               
                    
                
                    <br/><br/>
                    
                   <RouteAnilyzeTable routes={this.state.routes} />
                   
                
              </div>
           
              ) 
               
      }
                                                      
                                            
                                            
                                                      
                                                      
                                          }//class RouteAlilyze end
                                          
                    
var Routes = {
              
              'dairy1': {  name:'dairy1',
                            to:15,
                            pump:35,
                            from:15,
                            unload:40
                          
                        },
              'dairy2': {  name:'dairy2',
                            to:15,
                            pump:35,
                            from:15,
                            unload:40
                          
                        },
              'dairy3': {  name:'dairy3',
                            to:15,
                            pump:35,
                            from:15,
                            unload:40
                          
                        },
              'dairy4': {  name:'dairy4',
                            to:15,
                            pump:35,
                            from:15,
                            unload:40
                          
                        },
            }
                                                               
                                                               //var RoutesAssign;

function runTimeA(prop){
                        
                        console.log(prop)
                        var obNew = []
                        var list = [prop.Route1,prop.Route2,prop.Route3,prop.Route4]
                        for (var i = 0;  i < list.length;  i++) {
                        
                                                               obNew.push( 
                                                                   
                                                                        {
                                                                            key:[i],
                                                                            name:Routes[list[i]].name,
                                                                            to:Routes[list[i]].to,
                                                                            pump:Routes[list[i]].pump,
                                                                            from:Routes[list[i]].from,
                                                                            unload:Routes[list[i]].unload
                                                                        }
                                                                        
                                                                        )
                                                        
                                                                } 
                      
                        return obNew
                      
                    }
                      
                      
                      
export default RouteAlilyze