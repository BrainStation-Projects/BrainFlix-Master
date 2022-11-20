import './UploadForm.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function UploadForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted. Title: ${title} Description: ${description}`);

        event.target.reset();
    }

    const handleCancelBtn = () => {
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit} className="upload__form">
            <div className="upload__wrapper">
                <div className="upload__thumbnail">
                    <p className="upload__subtitle">video thumbnail</p>
                    <div className="upload__img-container">
                        <img src={thumbnail} alt="bicicle" className="upload__img" />
                    </div>
                </div>
                <div className="upload__inputs">
                    <label htmlFor="title" className="upload__label">title your video</label>
                    <input type="text" className="upload__input" name="title" placeholder='Add a title to your video' onChange={handleChangeTitle} />
                    <label htmlFor="description" className="upload__label">add a video description</label>
                    <textarea className='upload__input upload__input--big' name="description" placeholder='Add a description to your video' onChange={handleChangeDescription} />
                </div>
            </div>

            <div className="upload__buttons">
                <button type='submit' className="upload__btn button">
                    <img src={publishIcon} alt="upload icon" className="button__icon" />
                    <span className="button__text">PUBLISH</span>
                </button>
                <button onClick={handleCancelBtn} className='upload__btn-cancel' >
                    <span className="upload__cancel">CANCEL</span>
                </button>

            </div>
        </form>
    )
}

export default UploadForm;