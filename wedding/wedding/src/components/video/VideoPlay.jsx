import React from 'react'
import styles from "./VideoPlay.module.css"

const VideoPlay = () => {
  return (
    <main className={styles.container}>
      <video playsInline src="/wedingv.mp4" autoPlay muted loop className={styles.video}></video>
    </main>
  )
}

export default VideoPlay
