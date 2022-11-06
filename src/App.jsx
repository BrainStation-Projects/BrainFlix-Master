import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentsList from './components/CommentsList/CommentsList';
import RecommendedList from './components/RecommendedList/RecommendedList';
import videoList from './data/video-details.json';
import { useState } from 'react';



function App() {

  const [currentVideo, setCurrentVideo] = useState(videoList[0])

  const handleClick = (title) => {
    const foundVideo = videoList.find((video) => video.title === title)
    setCurrentVideo(foundVideo)
  }

  return (
    <div className="App">
      <Header />
      <Video currentVideo={currentVideo} />
      <div className='container'>
        <section className='video'>
          <VideoInfo currentVideo={currentVideo} />
          <CommentsList currentVideo={currentVideo} />
        </section>
        <RecommendedList videoList={videoList.filter((video) => video.title !== currentVideo.title)} handleVideoClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
