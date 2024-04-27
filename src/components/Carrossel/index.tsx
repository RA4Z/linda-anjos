import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import styles from './Carrossel.module.scss'

import IMG1 from 'images/image1.jpg'
import IMG2 from 'images/image2.jpg'
import IMG3 from 'images/image3.jpg'
import IMG4 from 'images/image4.jpg'
import IMG5 from 'images/image5.jpg'
import IMG6 from 'images/image6.jpg'
import IMG7 from 'images/image7.jpg'

export default function Carrossel() {
    const slides = [
        {
            image: IMG1
        },
        {
            image: IMG2
        },
        {
            image: IMG3
        },
        {
            image: IMG4
        },
        {
            image: IMG5
        },
        {
            image: IMG6
        },
        {
            image: IMG7
        }
    ]
    return (
        <div className={styles.container}>
            <ReactCarousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                swipeable={true}
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}>

                {slides.map(slide => (
                    <div key={slide.image} className={styles.item}>
                        <div>
                            <img src={slide.image} alt={slide.image} />
                        </div>
                    </div>
                ))}
            </ReactCarousel>
        </div>
    )
}