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
                                                               
function getTime(stime,adOrTake){
    
                          var  date1 = ""+new Date()
                          var  dateGrab = date1.indexOf(':')
                          var  dateInsert = date1.slice(0,dateGrab-2)
                          var  date2 = ''+new Date(dateInsert+' '+stime)
                          var  dateGrab2 = date2.lastIndexOf(":")
                          var dateInsert2 = date2.slice(0,dateGrab2)
                          var dateCal2 = new Date(dateInsert2).getMinutes()+adOrTake
                          var dateCal3 = new Date(dateInsert2).setMinutes(dateCal2)
                          var dateFin1 = ""+new Date(dateCal3)
                          var dateFinIndex = dateFin1.lastIndexOf(":")
                          var finShort = dateFin1.slice(0,dateFinIndex)
                          
                          console.log(finShort)
    
    
                       }                                                               

function runTimeA(prop){
                        
                        console.log(prop)
                        var obNew = [];
                        var hourAim = prop.hourAim.split(":");
                        var startTime = prop.startTime;
                        var list = [prop.Route1,prop.Route2,prop.Route3,prop.Route4];
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
                                                                
                        for (var i2 = list.length-1;  i2 > 0;  i2--) {
                                                            
                                                                     console.log(obNew[i2])
                                                            
                                                                  }
                                                                  
                       var hourAim2 = (60*hourAim[0])+Number(hourAim[1])
                        getTime(startTime,hourAim2)                                          
                                                            
                        return obNew
                      
                    }
                      
                      
                      
export default RouteAlilyze