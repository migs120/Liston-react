import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';






class App extends Component {
  
  
  
  
  
                            state = {
                              
                                      todos: [
                                              
                                                {
                                                  id:1,
                                                  title:'take trashout',
                                                  completed: false
                                                },
                                                
                                                {
                                                  id:2,
                                                  title:'feed dog',
                                                  completed: false
                                                },
                                                
                                                {
                                                  id:3,
                                                  title:'clean room',
                                                  completed: false
                                                }
                                              
                                              ]                              
                                    }
  
  
  
  
  
  
  
                              render() {
                                
                                        
                                       
                                        
                                        return (
                                                  <div className="App">
                                                  
                                                  
                                                   <h1>React App</h1>
                                                   
                                                   
                                                   <Todos  todos={this.state.todos} />
                                                   
                                                  </div>
                                                );
                                      }
                                      
                                      
                                      
                                      
                            }

export default App;
