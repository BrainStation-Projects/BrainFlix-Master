import './RecommendedList.scss';
import RecommendedVideo from '../RecommendedVideo/RecommendedVideo';

function RecommendedList(props) {

    return (
        <section className="recommended">
            <p className="recommended__title">NEXT VIDEOS</p>
            {props.videoList.map((video) => {
                return <RecommendedVideo key={video.id} url={video.image} title={video.title} author={video.channel} handleVideoClick={props.handleVideoClick} />
            })}
        </section>
    );
}

export default RecommendedList;