import { useRef, useContext, useEffect } from 'react'
import { filterContext } from '../../Context/filter-context';
import './Filter.css'

export default function Filter() {
    const priceref = useRef()
    const categoryref = useRef()
    const filter_ctx = useContext(filterContext)

    function priceFilterHandler() {
        filter_ctx.filterByPrice(priceref.current.value)
    }
    function categoryFilterHandler() {
        filter_ctx.filterByCategory(categoryref.current.value)
    }

    useEffect(()=>{

    },[])
    return (
        <div className='container-fluid Filter_Box'>
            <div className="row">
                <div className='col-12 box'>
                    <h5 className="widget-title">By Price</h5>
                    <select ref={priceref} onChange={priceFilterHandler} >
                        <option value={[500, 9999]} > Rs. 500 — Rs. 9,999 </option>
                        <option value={[10000, 29999]} > Rs. 10,000 — Rs. 29,999 </option>
                    </select>
                </div>
                <div className='col-12 box'>
                    <h5 className="widget-title">By Category</h5>
                    <select ref={categoryref} onChange={categoryFilterHandler} >
                        <option value='smartphones'> Smartphones </option>
                        <option value='laptops'> Laptops </option>
                        <option value='Abstract Paintings'> Abstract Paintings </option>
                        <option value='Cityscape Paintings'> Cityscape Paintings </option>
                        <option value='Landscape Paintings'>Landscape Paintings</option>
                        <option value='Sketch'> Sketch </option>
                        <option value='Modern Drawings'> Modern Drawings </option>
                        <option value='Buddha Drawings '> Buddha Drawings </option>
                    </select>
                </div>
            </div>
        </div>
    )
}