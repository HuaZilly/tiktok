import video1 from './Video/video-1.mp4';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import styles from './Video/Video.module.scss'
import {clsx} from "clsx";
const Videos = (props, currentRef) => {
    const videoRef = useRef();
    useImperativeHandle(currentRef, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }));
    const value = {
        isValue: 1
    };
    const test = {
        [value.isValue]: 213
    }
    console.log(test)
    return (
        <>
            <h2 className={clsx(styles.heading, styles.cRed)}> Heading 2 <span>test 123</span></h2>
            <video
                src={video1}
                width={280}
                ref={videoRef}
            />
        </>
    )
}

export default forwardRef(Videos)