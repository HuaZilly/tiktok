import logo from './logo.svg';
import './App.css';
import {useStore, StoreContext, StoreProvider, actions} from "./store";
import {useRef} from "react";
import Videos from  './Videos';

function App() {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        inputRef.current.focus();
    }

    const inputRef = useRef()

    console.log(todos)


    const videoRef = useRef();

    const handlePause = () => {
        videoRef.current.pause();
    }
    const handlePlay = () => {
        videoRef.current.play();
    }
    return (
        <div className="App">
            <Videos ref={videoRef}/>
            <button onClick={handlePlay}> Play</button>
            <button onClick={handlePause}> Pause</button>
            <div>
                <input
                    ref={inputRef}
                    value={todoInput}
                    placeholder={'Enter Todo'}
                    onChange={e => {
                        dispatch(actions.setTodoInput(e.target.value))
                    }}
                />
                <button onClick={handleAdd}>
                    Add
                </button>
                {
                    todos?.length > 0 && (
                        <ul>
                            {
                                todos?.map((todo, index) => (
                                    <li key={index}> {todo} </li>
                                ))
                            }
                        </ul>
                    )
                }

            </div>
        </div>
    );
}

export default App;
