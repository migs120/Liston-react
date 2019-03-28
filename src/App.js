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
  
  
  
  
                              markComplete = (a) => { 
                                  
                                                      this.setState({
                                                                          todos: this.state.todos.map(
                                                                      
                                                                                                          todoLoopName => {
                                                                                                              
                                                                                                                              if(todoLoopName.id === a.id){ todoLoopName.completed = !todoLoopName.completed  } 
                                                                                                                              
                                                                                                                              return todoLoopName
                                                                                                                      
                                                                                                                         }
                                                                      
                                                                                                      )
                                                                    })               
                               
                                  
                                                    }
  
  
                              render() {
                                
                                        
                                       
                                        
                                        return (
                                                  <div className="App">
                                                  
                                                  
                                                   <h1>React App</h1>
                                                   
                                                   
                                                   <Todos  todos={this.state.todos}  markComplete={this.markComplete}/>
                                                   
                                                  </div>
                                                );
                                      }
                                      
                                      
                                      
                                      
                            }

export default App;
