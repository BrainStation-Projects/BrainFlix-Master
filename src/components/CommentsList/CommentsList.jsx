import './CommentsList.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

function CommentsList(props) {

    const comments = props.currentVideo.comments;

    return (
        <div className="comments">
            <h3 className="comments__title">{comments.length} Comments</h3>
            <CommentForm />
            {comments.map((comment) => {
                //Timestamp modifier to convert timestamp to readable format using backticks and Date() method.
                let d = new Date(comment.timestamp);
                let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

                return <Comment key={comment.id} user={comment.name} comment={comment.comment} date={date} />
            })}

        </div>
    );
}

export default CommentsList;