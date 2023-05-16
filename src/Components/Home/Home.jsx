import Carousel from "./Carousel"
import Slide from "../Slider/Slider"
import Posts from "../Posts/Posts"
import Poster from './Poster'
import Supports from "../Posts/Supports"
import Gallery from "./Gallery"
import { useContext, useEffect } from "react"
import { wishContext } from "../../Context/wishlist-context"

export default function Home() {
    const wish_ctx= useContext(wishContext)
    useEffect(()=>{
        // wish_ctx.displayWishlistItems()
    },[])
    return (
        <>
            <Carousel />
            <Gallery />
            <Slide title='- Our Featured -' />
            <Supports />
            <Slide title='- Most Popular -' />
            <Poster />
            <Slide title='- Latest -' />
            <Posts />
        </>
    )
}