import './RecommendedVideo.scss';
import { Link } from 'react-router-dom';

function RecommendedVideo(props) {
    return (
        <Link to={`/videos/${props.id}`}><div className="recommended__video" >
            <img src={props.image} alt={props.title}
                className="recommended__img"></img>
            <div className="recommended__info">
                <h3 className="recommended__name">
                    {props.title}
                </h3>
                <p className="recommended__author">{props.channel}</p>
            </div>
        </div>
        </Link>
    );
}

export default RecommendedVideo;


// onClick={(event) => {
//     event.preventDefault()
//     props.handleVideoClick(props.title)
// }}