import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';


function CommentForm() {
  return (
    <div className="comments__wrapper">
      <div className="comments__avatar"></div>
      <form id="commentsForm" action="submit" className="comments__form">
        <div className="comments__input-container">
          <label htmlFor="comment" className="comments__subtitle">join the conversation</label>
          <textarea id="inputComment" className="comments__input comments__input" name="comment"
            placeholder="Add a new comment"></textarea>
        </div>
        <button type="submit" className="button comments__btn">
          <img src={commentIcon} alt="comment icon"
            className='button__icon'></img>
          <span className="button__text">COMMENT</span>
        </button>
      </form>
    </div>
  );
}

export default CommentForm;