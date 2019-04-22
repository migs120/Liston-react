import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Header from './layout/Header';
import About from './pages/about';
import RouteAlilyze from './pages/route_anilyze';
import uuid from 'uuid';







class App extends Component {
  
  
  
  
  
                            state = {
                              
                                      todos: [
                                              
                                                {
                                                  id: uuid.v4(),
                                                  title:'task1 example',
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
                                                                                                    
                                                                  <Route exact path='/Route_anilyzer' render={props => (
                                                                                                      <React.Fragment>
                                                                                                      
                                                                                                      
                                                                                                      <RouteAlilyze/>
                                                                                                      
                                                                                                        
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
