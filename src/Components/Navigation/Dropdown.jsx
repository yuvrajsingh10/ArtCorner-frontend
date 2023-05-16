import { Link } from 'react-router-dom'
import Wrapper from "../Layout/Wrapper"

export default function Dropdown(props) {
    return (
        <Wrapper class='container main--dropdown shadow-sm'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={props.src} alt='poster' />
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h3>{props.menu}</h3>
                            <hr />
                            <ul>
                                {props.menuList.map((list, indx) => <Link to={`/${list.split(' ').join('-').toLowerCase()}`} ><li key={indx} onClick={props.onClick} >{list}</li></Link>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}