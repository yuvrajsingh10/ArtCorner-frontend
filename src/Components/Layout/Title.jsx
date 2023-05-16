import style from './Title.module.css'

export default function Title(props) {
    return <h1 className={style.title}>{props.title}</h1>
}