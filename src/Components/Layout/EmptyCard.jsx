import Wrapper from './Wrapper'
import Title from './Title'
import {Link} from 'react-router-dom'
import { BsCartXFill } from 'react-icons/bs'
import './EmptyCard.css'

export default function EmptyCard(props) {
    return (
        <Wrapper class='container empty_card'>
            <BsCartXFill />
            <Title title={props.title} ></Title>
            <div className='d-flex justify-content-center'>
                <Link to='/collections'>
                    <button className='btn button w-100'>RETURN TO SHOP</button>
                </Link>
            </div>
        </Wrapper>
    )
}