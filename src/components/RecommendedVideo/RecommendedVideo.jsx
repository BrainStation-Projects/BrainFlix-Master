import './RecommendedVideo.scss';


function RecommendedVideo(props) {
    return (
        <div className="recommended__video" onClick={() => {
            props.handleVideoClick(props.title)
        }}>
            <img src={props.url} alt={props.title}
                className="recommended__img"></img>
            <div className="recommended__info">
                <h3 className="recommended__name">
                    {props.title}
                </h3>
                <p className="recommended__author">{props.author}</p>
            </div>
        </div>
    );
}

export default RecommendedVideo;