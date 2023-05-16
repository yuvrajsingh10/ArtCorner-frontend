import Support from "./Support";
import Wrapper from "../Layout/Wrapper";
import Title from "../Layout/Title";
import img_1 from '../../assets/img/card-1.png'
import img_2 from '../../assets/img/card-2.png'
import img_3 from '../../assets/img/card-3.png'
import img_4 from '../../assets/img/card-4.png'

const posts = [
    { id: 'p1', icon: img_1, Title: 'Support Artist', Description: `ArtD'Hope encourages artists to join together and support other artists through different platforms and other activities. We intend to support artists around the globe by organizing events and enabling a platform to promote and offer their art for sale.` },
    { id: 'p2', icon: img_4, Title: 'Social Impact', Description: 'ArtDHope aims at the betterment and well-being of society by supporting them with various social activities. Our objective is to bring cultural and social harmony through different art-related activities & support the artist in need.' },
    { id: 'p3', icon: img_3, Title: 'Promote Art', Description: `ArtD'Hope focuses on encouraging and promoting art and artists of various diverse cultures and forms by enabling them to join together and interact, share, and sell their artworks by linking them with prospective buyers. We also organize art events and art contests for artists.` },
    { id: 'p3', icon: img_2, Title: 'Art Auction', Description: `Through our Art Store, we will conduct different art auctions. We do associate and collaborate with art galleries & independent fine artists for artwork sales & auctions. We conduct live and online auctions of modern and contemporary fine arts through our international auction house.` }
]


export default function Supports() {
    return (
        <>
            <Wrapper class='container-fluid my-5'>
                <Title title='- Supporting The Overall Creative Community -' />
                <div className='row d-flex justify-content-center'>
                    {posts.map(post => <Support key={post.id} icon={post.icon} title={post.Title} desc={post.Description} />)}
                </div>
            </Wrapper>
        </>
    )
}