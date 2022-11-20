import './Comment.scss';
import trashIcon from '../../assets/icons/trash.svg';
import axios from 'axios';

function Comment({ videoId, commentId, user, comment, date, API_URL, setComments }) {

    const handleDelete = (event) => {

        axios.delete(`${API_URL}/videos/${videoId}/comments/${commentId}`)
            .then(response => {
                console.log(response);
                return axios.get(`${API_URL}/videos/${videoId}`)
            })
            .then(response => {
                setComments(response.data)
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className="comments__singlecomment">
            <div className="comments__left">
                <div className="comments__profile"></div>
                <img src={trashIcon} alt="trash can icon"
                    className='comments__icon' onClick={handleDelete}></img>
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