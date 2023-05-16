import Wrapper from '../Layout/Wrapper'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <section>
            <Wrapper class={`container-fluid ${style.footer} py-5 px-5 mt-5`}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h3 className='logo'>-Art Corner-</h3>
                        <p className={style.desc}>Art Corner is a leading Online Art Gallery based in India & open to the world for connecting art and art admirers. You can browse and buy artworks and paintings online in few defined steps. Art Corner is a platform for promoting quality artwork created by artists worldwide.</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <h3 className={style.heading}>Quick Links</h3>
                        <ul className={style.desc}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <h3 className={style.heading}>Paintings</h3>
                        <ul className={style.desc}>
                            <li>Abstract paintings</li>
                            <li>Figurative Paintings</li>
                            <li>Landscape Paintings</li>
                            <li>Nature Paintings | Scenery Paintings</li>
                            <li>Religious Paintings</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
            <div className={style.copyright}>
                <p className='bg-primary p-2 mb-0'>Copyright ©️ 2023. All rights reserved.</p>
            </div>
        </section>
    )
}