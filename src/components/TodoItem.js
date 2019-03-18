import React, { Component } from 'react';


class TodoItem extends Component {
                              render() {
                
                                        return (
                                                
                                                <div  style={itemStyle}>
                                                
                                                    <p>{this.props.todo.title}</p>
                                                    
                                                </div>
                                            
                                                )
                                      }
                                      
                                      
                            
                            }
                            

const itemStyle = {backgroundColor:'yellow'} 


export default TodoItem;