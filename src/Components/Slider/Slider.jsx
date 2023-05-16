import { useContext } from 'react'
import Wrapper from "../Layout/Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Slider from 'react-slick'
import Card from '../UI/Card';
import Description from '../Modal/DescriptionModal';
import { descriptionContext } from '../../Context/description-context';
import { filterContext } from '../../Context/filter-context';
import Title from "../Layout/Title"

export default function Slide(props) {
  const desc_ctx = useContext(descriptionContext)
  const filter_ctx = useContext(filterContext)

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Wrapper class="container-fluid mt-4">
        <Title title={props.title} />
        <Slider {...settings}>
          {filter_ctx.items.map(item => <Card key={item._id} item={item} />)}
        </Slider>
      </Wrapper>
      {desc_ctx.modalIsOpen && <Description />}
    </>
  )
}