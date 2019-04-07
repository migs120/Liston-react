import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';







class App extends Component {
  
  
  
  
  
                            state = {
                              
                                      todos: [
                                              
                                                {
                                                  id: uuid.v4(),
                                                  title:'take trashout',
                                                  completed: false
                                                },
                                                
                                                {
                                                  id: uuid.v4(),
                                                  title:'feed dog',
                                                  completed: false
                                                },
                                                
                                                {
                                                  id: uuid.v4(),
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
                                                    
                                                    
                                                   
                                                    
                            addTodo = (title) => {
                                
                                                   const newTodo = { 
                                                                        id: uuid.v4(),
                                                                        title:title,
                                                                        completed:false
                                                                        
                                                                    }
                                
                                
                                                    this.setState({todos:[...this.state.todos, newTodo]})    
                                                    console.log(title)
                                                    
                                                    
                                                  }
                          
  
                              render() {
                                
                                        
                                       
                                        
                                        return (
                                                  <div className="App">
                                                  
                                                  <Header />
                                                  <AddTodo addTodo={this.addTodo} />
                                             
                                                   <Todos  
                                                   
                                                          todos={this.state.todos}  
                                                          markComplete={this.markComplete1}
                                                          DeleteState={this.delThis}
                                                          
                                                          
                                                    />
                                                   
                                                  </div>
                                                );
                                      }
                                      
                                      
                                      
                                      
                            }
                            
                            
                           
                            
                            
function findId(objects,id){
                    var a = 0
                    var b = 0
                    for (var i = 0;  i < objects.length;  i++) {
                                                                var a1 = (typeof objects[i] !== 'undefined')
                                                                var a2 =objects[i].id===id
                        
                                                                 a1 ? (a2 ? a=i : b=0 ): b = 0         
                                                                
                                                            
                        
                                                                }
                    
                    return a
                  }                           
                            
                            
                            
function MarkChanger(prop, state){
                                
                                var  c = state
                                
                                var idn = findId(c,prop.id)
                                
                                c[idn].completed = !c[idn].completed 
                                
                                console.log(c)
                                
                                return c
                                
                                
                            }     
                            
function DeleteItem(prop, state){
                                
                                var  c = state
                                
                                var idn = findId(c,prop.id)
                                
                                
                                
                               delete c[idn]
                               
                               var filtered = c.filter(function (el) {
                                                                          return el != null;
                                                                        });
                         
                               return filtered
                                
                                
                            }   

export default App;
