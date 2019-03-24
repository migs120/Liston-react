import React, { Component } from 'react';





class TodoItem extends Component {
    
                                      markComplete(e){console.log(this.props)}

                                      render() {
                        
                                                    return (
                                                            
                                                            <div  style={itemStyle}>
                                                            
                                                                <p style={  getStyle(this.props) } >
                                                                
                                                                    <input type="checkbox"  onChange={this.markComplete.bind(this)}/>{''}
                                                                    {this.props.todo.title}  
                                                                </p>
                                                                
                                                            </div>
                                                        
                                                            )
                                              }
                                      
                                      
                            
                               }
                            

var itemStyle = {backgroundColor:'yellow'} 



function getStyle(props)  {
    
                            if(props.todo.completed){
                                
                                                      return {
                                                                textDecoration:'line-through',
                                                                fontFamily:'Arial, Helvetica, sans-serif' 
                                                                
                                                            
                                                             }  
                                                      
                                                     }
                                                             
                            else{  
                                
                                return  {  
                                    
                                        textDecoration:'none',
                                        fontFamily:'Impact, Charcoal, sans-serif',
                                        fontSize:'15px'
                                    
                                        }  
                                
                                
                                }  
                            
                            }  


export default TodoItem;