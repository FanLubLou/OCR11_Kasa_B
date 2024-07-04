import styles from './Gallery.module.scss'
import ArrowRight from '../../assets/arrowRight.svg'
import ArrowLeft from '../../assets/arrowLeft.svg'
import { useState } from 'react'



export default function Gallery ({ Images }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === Images.length - 1 ? 0 : currentSlide + 1 );
    }
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? Images.length - 1 : currentSlide - 1 );
    }    
    
    return (
        <div className={styles.wrapper}>
          <img            
            src={Images[currentSlide]}
            alt="Current Gallery view"
          />
          <div className={styles.wrapper_ArrowContainer}>
            {Images.length > 1 && (
              <img className={styles.wrapper_ArrowContainer_img}                
                src={ArrowLeft}
                alt="prev button"
                onClick={prevSlide}
              />
            )}
    
            {Images.length > 1 && (
              <img className={styles.wrapper_ArrowContainer_img}               
                src={ArrowRight}
                alt="next button"
                onClick={nextSlide}
              />
            )}
          </div>
    
          {Images.length > 1 && (
            <div className={styles.wrapper_Counter}>
              {currentSlide + 1}/{Images.length}
            </div>
          )}
        </div>
      );
    };
    
  


