import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
import Videos from  './Videos'


function App() {
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
      </div>
  );
}

export default App;
