import './Comment.scss';



function Comment(props) {
    return (
        <div className="comments__singlecomment">
            <div className="comments__left">
                <div className="comments__profile"></div>
            </div>
            <div className="comments__textwrapper">
                <div className="comments__header">
                    <p className="comments__name">{props.user}</p>
                    <p className="comments__date">{props.date}</p>
                </div>
                <p className="comments__text">{props.comment}</p>
            </div>
        </div>
    );
}

export default Comment;