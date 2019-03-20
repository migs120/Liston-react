import React, { Component } from 'react';





class TodoItem extends Component {

                                      render() {
                        
                                                    return (
                                                            
                                                            <div  style={itemStyle}>
                                                            
                                                                <p style={getStyle(this.props) } >  {this.props.todo.title}   </p>
                                                                
                                                            </div>
                                                        
                                                            )
                                              }
                                      
                                      
                            
                               }
                            

var itemStyle = {backgroundColor:'yellow'} 



function getStyle(props)  {
    
                            if(props.todo.completed){
                                
                                                      return {textDecoration:'line-through'}  
                                                      
                                                     }
                                                             
                            else{  return{textDecoration:'none'}  }  
                            
                            }  


export default TodoItem;