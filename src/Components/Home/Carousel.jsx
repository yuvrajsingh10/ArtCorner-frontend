import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import style from './Carousel.module.css'
import slider_1 from '../../assets/img/slider--1.jpg'
import slider_2 from '../../assets/img/slider--2.jpg'
import slider_3 from '../../assets/img/slider--3.jpg'
import slider_4 from '../../assets/img/slider--4.jpg'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className={`carousel-inner ${style.carousel_image_container}`}>
                    <div className="carousel-item active">
                        <img src={slider_4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>- Art Corner -</h1>
                            <h5>lorem ipsum dolor sit amet consectetur adipisicing elita.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider_2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>- Art Corner -</h1>
                            <h5>lorem ipsum dolor sit amet consectetur adipisicing elita.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider_3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>- Art Corner -</h1>
                            <h5>lorem ipsum dolor sit amet consectetur adipisicing elita.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>- Art Corner -</h1>
                            <h5>lorem ipsum dolor sit amet consectetur adipisicing elita.</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}