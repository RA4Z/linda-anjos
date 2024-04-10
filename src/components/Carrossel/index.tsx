import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import styles from './Carrossel.module.scss'

import IMG1 from 'images/image1.jpg'
import IMG2 from 'images/image2.jpg'
import IMG3 from 'images/image3.jpg'

export default function Carrossel() {
    const slides = [
        {
            title: 'Pôr do Sol',
            subtitle: 'Sol se pondo ao fundo',
            image: IMG1
        },
        {
            title: 'Empinada Cavalesca',
            subtitle: 'Cavalando empinando as pernas',
            image: IMG2
        },
        {
            title: 'Visualizando Cânion',
            subtitle: 'Cânion com um rio em sua extensão',
            image: IMG3
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
                    <div key={slide.title} className={styles.item}>
                        <div>
                            <img src={slide.image} alt={slide.title} />
                        </div>
                        <h2>{slide.title}</h2>
                        <h3>{slide.subtitle}</h3>
                    </div>
                ))}
            </ReactCarousel>
        </div>
    )
}