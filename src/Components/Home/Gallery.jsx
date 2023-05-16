import img_1 from '../../assets/img/gallery-1.webp'
import img_2 from '../../assets/img/gallery-2.webp'
import img_4 from '../../assets/img/gallery-4.webp'
import img_5 from '../../assets/img/gallery-5.webp'
import img_6 from '../../assets/img/gallery-6.webp'
import img_7 from '../../assets/img/gallery-7.webp'
import Title from '../Layout/Title'

export default function Gallery() {
    return (
        <section className='my-5'>
            <div className='container-fluid'>
            <Title title='- BUY ORIGINAL PAINTINGS -' />
                <div className='image_box'>
                    <div className='images'><img src={img_1} alt='' className='img-fluid' /></div>
                    <div className='images'><img src={img_2} alt='' className='img-fluid' /></div>
                    <div className='images'><img src={img_7} alt='' className='img-fluid' /></div>
                </div>
                <div className='image_box'>
                    <div className='images'><img src={img_4} alt='' className='img-fluid' /></div>
                    <div className='images'><img src={img_5} alt='' className='img-fluid' /></div>
                    <div className='images'><img src={img_6} alt='' className='img-fluid' /></div>
                </div>
            </div>
        </section>
    )
}