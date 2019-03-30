import React, {Component} from 'react'

export class AddTodo extends Component {
    
    
state={
    
    title:''
}    
    
    
onChange = (e) => this.setState({title: e.target.value})    
    
render(){return(
    
    
    
    <div>
    
            <form>
                    <input  
                            type='text'
                            name='title'
                            placeholder='Add Todo...'
                            value={this.state.title}
                            onChange={this.onChange}
                    />
                    
                    
                    <input  
                            type='submit'
                            value='Submit'
                            className='btn'
                    />
            </form>    
    
    </div>
    
    
    
    
    
    
)}     
    
    
    
    
    
    
}



export default AddTodo;


