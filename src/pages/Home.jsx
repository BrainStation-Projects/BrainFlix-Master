import Video from '../components/Video/Video';
import VideoInfo from '../components/VideoInfo/VideoInfo';
import CommentsList from '../components/CommentsList/CommentsList';
import RecommendedList from '../components/RecommendedList/RecommendedList';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


function Home() {
    const { id } = useParams();
    const [currentVideo, setCurrentVideo] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [comments, setComments] = useState([]);
    const API_URL = "https://project-2-api.herokuapp.com";
    const API_Key = "?api_key=810f0ef8-07eb-408e-a0e6-3550f5618867";

    console.log(id)

    useEffect(() => {
        axios.get(`${API_URL}/videos${API_Key}`)
            .then(response => {

                setVideoList(response.data);
            })
    }, []);

    useEffect(() => {
        let videoId = id || videoList[0]?.id;

        if (videoId) {
            axios.get(`${API_URL}/videos/${videoId}${API_Key}`)
                .then(response => {
                    setCurrentVideo(response.data);
                })
        }
    }, [id, videoList, comments]);

    return (
        <>
            {currentVideo && <Video currentVideo={currentVideo} />}
            <div className='container'>
                <section className='video'>
                    {currentVideo && <VideoInfo currentVideo={currentVideo} />}
                    {currentVideo && <CommentsList currentVideo={currentVideo} API_URL={API_URL} API_Key={API_Key} setComments={setComments} />}
                </section>
                {videoList && currentVideo && <RecommendedList videoList={videoList?.filter((video) => video.title !== currentVideo.title)} />}
            </div>
        </>);
}

export default Home;