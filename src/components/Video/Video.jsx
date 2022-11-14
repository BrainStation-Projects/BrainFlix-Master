import './Video.scss';

function Video({ currentVideo }) {

    return (
        <section className="hero">
            <video poster={currentVideo.image} className="hero__player" controls>
                {/* <source src={props.currentVideo.video} /> */}
            </video>
        </section>
    );
}

export default Video;