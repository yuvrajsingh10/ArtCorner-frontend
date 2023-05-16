import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

export default function Wrapper(props) {
    return <div className={props.class}>{props.children}</div>
}