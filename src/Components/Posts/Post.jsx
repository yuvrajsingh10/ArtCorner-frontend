import './Posts.css'

export default function Post(props) {
    return (
        <div className='col-lg-4 col-sm-12'>
            <div className='card posts-card'>
                <div className='card-body'>
                    <img src={props.img} alt='' />
                </div>
                <div className='card-footer'>
                    <h3 className="post-heading">{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}