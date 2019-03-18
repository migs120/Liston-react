import React, { Component } from 'react';


class TodoItem extends Component {
    
    
   getStyle = () => {
    
                    if(this.props.todo.completed){
                                                      return {textDecoration:'line-through'}  
                                                     }
                                                     
                    else{return{textDecoration:'none'}}  
                    
                    }
    
    
                              render() {
                
                                        return (
                                                
                                                <div  style={this.getStyle()}>
                                                
                                                    <p>{this.props.todo.title}</p>
                                                    
                                                </div>
                                            
                                                )
                                      }
                                      
                                      
                            
                            }
                            

var itemStyle = {backgroundColor:'yellow'} 




export default TodoItem;