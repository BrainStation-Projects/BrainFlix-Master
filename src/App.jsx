import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import videoList from './data/video-details.json';


function App() {

  const [currentVideo, setCurrentVideo] = useState(videoList[0])

  return (
    <div className="App">
      <Header />
      <Video currentVideo={currentVideo} />
      <div className='container'>
        <section className='video'>
          <VideoInfo currentVideo={currentVideo} />
        </section>
      </div>
    </div>
  );
}

export default App;
