import { useContext, useEffect } from 'react'
import Card from './Card'
import Description from '../Modal/DescriptionModal';
import { descriptionContext } from '../../Context/description-context';
import { filterContext } from '../../Context/filter-context';
import Filter from './Filter'
import { wishContext } from '../../Context/wishlist-context';

export default function Categories() {
    const desc_ctx = useContext(descriptionContext)
    const filter_ctx = useContext(filterContext)
    const wish_ctx = useContext(wishContext)
    useEffect(()=>{
        wish_ctx.displayWishlistItems()
    },[])

    return (
        <div className='collections container-fluid pt-5'>
            <div className='row mt-5'>
                <div className='col-lg-3 col-sm-4'>
                    <Filter />
                </div>
                <div className='col-lg-9 col-sm-8'>
                    <div className='row'>
                        {filter_ctx.isLoading && <h3 className='Notify'>Loading...</h3>}
                        {filter_ctx.updatedItems.length !== 0 && filter_ctx.updatedItems.map(item => <div className='col-lg-3' key={item._id}><Card item={item} /></div>)}
                        {filter_ctx.updatedItems.length === 0 && !filter_ctx.isLoading && <h3 className='Notify'>No item found!</h3>}
                    </div>
                </div>
            </div>
            {desc_ctx.modalIsOpen && <Description />}
        </div>
    )
}