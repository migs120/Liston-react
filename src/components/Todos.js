import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    
    
                             // markComplete = () => {console.log( 'todo.js' )}
    
                              render() {
                                  
                                  
                                  
                                        
                                  
                                        return this.props.todos.map(
                                            
                                                                    (todo) => (
                                                                                
                                                                                <TodoItem 
                                                                                    key={todo.id}
                                                                                    todo={todo} 
                                                                                    markComplete1={this.props.markComplete}
                                                                                    DeleteItem={this.props.DeleteState}
                                                                                />          
                                                                                
                                                                               )
                                            
                                                                    );
                                                                    
                                                                    
                                                                    
                                                                    
                                      }
                            }

export default Todos;
