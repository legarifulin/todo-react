import {useState} from 'react';

const ToDoForm = ({addTask}) => {
    const [userInput,setUserInput] = useState('')


const handleChange = (e) => {
    setUserInput(e.currentTarget.value)

}    
const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('')
}

const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        handleSubmit(e)
    }
}


    return (
        <div className='new-todo'>
        <h2>New Todo</h2>
        <form onSubmit={handleSubmit}>
            <input
                value = {userInput}
                type = 'text'
                onChange = {handleChange}
                onKeyDown = {handleKeyPress}
                placeholder = 'Need to do...'
            />
            <div className='btn'>
            <button>Save</button>
            </div>
        </form>
        </div>
    )
}

export default ToDoForm;