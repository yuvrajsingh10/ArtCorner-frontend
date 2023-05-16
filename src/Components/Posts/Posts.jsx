import Wrapper from '../Layout/Wrapper'
import Title from '../Layout/Title'
import post_1 from '../../assets/img/posts--1.jpg'
import post_2 from '../../assets/img/poster--2.jpg'
import post_3 from '../../assets/img/post--3.jpg'
import Post from './Post'

const posts = [
    { id: 'p1', img: post_1, Title: 'Support Artist', Description: 'Decorating your walls with a gallery of art pieces is a great way to add a touch of personal style and sophisticati...' },
    { id: 'p2', img: post_2, Title: 'The Art of Framing: Tips for Displaying and Protecting Your Artwork', Description: 'The right frame can enhance the beauty of your artwork and help protect it from damage caused by dust, moisture, an...' },
    { id: 'p3', img: post_3, Title: 'How to Create a Gallery Wall: Tips and Tricks', Description: 'Decorating your walls with a gallery of art pieces is a great way to add a touch of personal style and sophisticati...' }
]

export default function Posts() {
    return (
        <Wrapper class='container-fluid'>
            <Title title='- Art Journal -' />
            <div className='row d-flex justify-content-center'>
                {posts.map(post => <Post key={post.id} img={post.img} title={post.Title} desc={post.Description} />)}
            </div>
        </Wrapper>
    )
}