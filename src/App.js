import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
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
  
  
  
  
  
  
  
                              markComplete1 = (a) => { 
                                  
                                                      this.setState({
                                                                         
                                                                       todos: MarkChanger(a, this.state.todos)
                                                                    })               
                               
                                  
                                                    }
                                                    
                                                    
                                                    
                             delThis = (a) => { 
                                  
                                                      this.setState({
                                                                         
                                                                       todos: DeleteItem(a, this.state.todos)
                                                                    })               
                               
                                  
                                                    }
  
  
                              render() {
                                
                                        
                                       
                                        
                                        return (
                                                  <div className="App">
                                                  
                                                  <Header />
                                                  <AddTodo />
                                             
                                                   <Todos  
                                                   
                                                          todos={this.state.todos}  
                                                          markComplete={this.markComplete1}
                                                          DeleteState={this.delThis}
                                                          
                                                          
                                                    />
                                                   
                                                  </div>
                                                );
                                      }
                                      
                                      
                                      
                                      
                            }
                            
                            
function MarkChanger(prop, state){
                                
                                var  c = state
                                c[prop.id-1].completed = !c[prop.id-1].completed 
                                
                                return c
                                
                                
                            }     
                            
function DeleteItem(prop, state){
                                
                                var  c = state
                               delete c[prop.id-1]
                                
                                return c
                                
                                
                            }   

export default App;
