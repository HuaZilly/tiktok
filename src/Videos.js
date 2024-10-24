import video1 from './video/video-1.mp4';
import {forwardRef, useImperativeHandle, useRef} from 'react';

const Videos = (props, currentRef) => {
    const videoRef = useRef();
    useImperativeHandle(currentRef, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <>
            <video
                src={video1}
                width={280}
                ref={videoRef}
            />
        </>
    )
}

export default forwardRef(Videos)