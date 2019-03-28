import React, { Component } from 'react';





class TodoItem extends Component {
    
                                     // markComplete = (e) => {console.log(this.props.todo.completed = !this.props.todo.completed),this.props.todo.completed = !this.props.todo.completed}

                                      render() {
                                                    //const {id, title } = this.props.todo;
                                                    return (
                                                            
                                                            <div  style={itemStyle}>
                                                            
                                                                <p style={  getStyle(this.props) } >
                                                                
                                                                    <input type="checkbox"  onChange={this.props.markComplete1.bind(this, this.props.todo)}/>
                                                                    {this.props.todo.title}{' '}
                                                                    <button  onClick={this.props.DeleteItem.bind(this, this.props.todo)}  style={buttonStyle}>delete</button>
                                                                </p>
                                                                
                                                            </div>
                                                        
                                                            )
                                              }
                                      
                                      
                            
                               }
                            

var itemStyle = {backgroundColor:'yellow'} 



var buttonStyle =  {
                color:'red',
                cursor:'pointer'
                           
                            
                 } 




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