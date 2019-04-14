import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/about';
import './App.css';
//import uuid from 'uuid';
import axios from 'axios';







class App extends Component {
  
  
  
  
  
                            state = {
                              
                                      todos: [
                                       
                                              
                                              ]                              
                                    }
                                    
                                    
                            componentDidMount(){
                                                    
                                                    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                                                    .then(res => this.setState({todos: res.data}))
                                                    
                                                }
  
  
  
  
  
  
                              markComplete1 = (a) => { 
                                  
                                                      this.setState({
                                                                         
                                                                       todos: MarkChanger(a, this.state.todos)
                                                                    })               
                               
                                  
                                                    }
                                                    
                                                    
                                                    
                             delThis = (a) => { 
                                  
                                                      axios.delete(`https://jsonplaceholder.typicode.com/todos/${a.id}`)
                                                      .then(
                                                            res => this.setState(
                                                                                {todos: [...this.state.todos.filter (todo => todo.id !== a.id) ]}
                                                                                )
                                                            );
                                  
                                                    }
                                                    
                                                    
                                                   
                                                    
                            addTodo = (title) => {
                                
                                                   axios.post('https://jsonplaceholder.typicode.com/todos',{title: title, completed: false})
                                                   .then(res=> this.setState({todos: [...this.state.todos, res.data]}))
                                   
                                                  }
                          
  
                              render() {
                                
                                        
                                       
                                        
                                        return (  <Router>
                                        
                                                                  <div className="App">
                                                                  
                                                                  <Header />
                                                                  
                                                                  <Route exact path='/' render={props => (
                                                                                                      <React.Fragment>
                                                                                                      
                                                                                                      <AddTodo addTodo={this.addTodo} />
                                                                                                 
                                                                                                       <Todos  
                                                                                                       
                                                                                                              todos={this.state.todos}  
                                                                                                              markComplete={this.markComplete1}
                                                                                                              DeleteState={this.delThis}
                                                                                                              
                                                                                                              
                                                                                                        />
                                                                                                        
                                                                                                        </React.Fragment>          
                                                                                                    )}/>
    
                                                                    
                                                                    
                                                               
                                                                  
                                                                <Route exact path='/about' component={About}/>
                                                                
                                                                
                                                                </div>
                                        
                                        
                                        
                                                    </Router>
                                                 
                                                );
                                      }
                                      
                                      
                                      
                                      
                            }
                            
                            
                           
                            
                            
function findId(objects,id){
                    var a = 0
                    for (var i = 0;  i < objects.length;  i++) {
                        
                                                                var a1 = typeof objects[i] !== 'undefined'
                                                                var a2 = objects[i].id===id
                                                                    
                                                                if( a1 && a2 ){  a=i  }
                                                            
                        
                                                                }
                    
                    return a
                  }                           
                            
                            
                            
function MarkChanger(prop, state){
                                
                                var  c = state
                                
                                var idn = findId(c,prop.id)
                                
                                c[idn].completed = !c[idn].completed 
                                
                                return c
                                
                                
                            }     
                            
 

export default App;
