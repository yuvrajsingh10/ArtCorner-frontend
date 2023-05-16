import Wrapper from '../../Components/Layout/Wrapper'
import style from '../SellPaintings/style.module.css'

export default function SellPaintings() {
    return (
        <>
            <Wrapper class='container'>
                <div className={`${style.main_box}`}>
                    <h1 className='logo mt-5 mb-4' >- Art Corner -</h1>
                    <div className={style.form_box}>
                        <h3 className={style.heading}>Fill this form</h3>
                        <div className='row'>
                            <div className='col-lg-7 col-sm-12'>
                                <form>
                                    <div className={style.input_box}>
                                        <input type='text' placeholder='First name' />
                                        <input type='text' placeholder='Last name' />
                                    </div>
                                    <div>
                                        <input type='email' placeholder='Email' />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='Phone' />
                                    </div>
                                    <div className={style.address}>
                                        <input type='text' placeholder='Address' />
                                        <input type='text' placeholder='Apartment, suite, etc. (optional)' />
                                    </div>
                                    <div className={style.input_box}>
                                        <input type='text' placeholder='City' />
                                        <select>
                                            <option>State</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Maharashtra</option>
                                            <option>Gujarat</option>
                                            <option>Assam</option>
                                        </select>
                                        <input placeholder='PIN code' />
                                    </div>
                                    
                                    <div><button className='btn button'>Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}