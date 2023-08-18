import styles from '../style.module.css'
import shortid from 'shortid'
import { useState } from 'react';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const [error, setError] = useState('');
    const handleChange=(event) => {
        setTodo(event.target.value)
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        if (!todo.trim()) {
            setError('Please enter a todo item.');
            return;
        }
        setTodoList([...todoList,{name:todo, id:shortid.generate()}])
        setTodo('');
        setError('');
    }
    return (
        <div className={styles.todoform}>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={handleChange}
                    className={styles.todoinput}
                    placeholder="Add Todo Item">
                </input>
                <button type="submit" className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}
export default Form;