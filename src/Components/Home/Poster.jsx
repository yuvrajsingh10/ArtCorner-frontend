import Wrapper from "../Layout/Wrapper"
import Title from "../Layout/Title"
import style from './Poster.module.css'

export default function Poster() {
    return (
        <section>
            <Wrapper class='py-4'>
                <Title title='- where silence meets seternity -' />
                <div className={style.poster}>
                    <h1 className="logo">Art Corner</h1>
                    <p>Art Corner.in is a leading Online Art Gallery based in India & open to the world for connecting art and art admirers. You can browse and buy artworks and paintings online in few defined steps. Art Corner.in is a platform for promoting quality artwork created by artists worldwide.</p>
                </div>
            </Wrapper>
        </section>
    )
}