import './Comment.scss';



function Comment({ user, comment, date }) {
    return (
        <div className="comments__singlecomment">
            <div className="comments__left">
                <div className="comments__profile"></div>
            </div>
            <div className="comments__textwrapper">
                <div className="comments__header">
                    <p className="comments__name">{user}</p>
                    <p className="comments__date">{date}</p>
                </div>
                <p className="comments__text">{comment}</p>
            </div>
        </div>
    );
}

export default Comment;