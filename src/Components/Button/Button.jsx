import './Button.css'

export default function Button(props) {
    return <div className='d-flex justify-content-center' style={props.style} ><button className={`btn button mt-4`}>{props.title}</button></div>
}