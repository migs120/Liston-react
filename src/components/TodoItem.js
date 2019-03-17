import React, { Component } from 'react';


class TodoItem extends Component {
                              render() {
                                  
                                  
                                  
                                        return (
                                                
                                                <div  style={{backgroundColor:'yellow'}}>
                                                
                                                    <p>{this.props.todo.title}</p>
                                                    
                                                </div>
                                            
                                                )
                                      }
                            }

export default TodoItem;