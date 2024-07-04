import Banner from "../../components/Banner/Banner";
import Gallery from '../../components/CardContainer/CardContainer';
import HomeImage from '../../assets/banner_home.png'

export default function Home() {
  return (
    <div>
        <Banner image={HomeImage} />      
        <Gallery />                     
    </div>
  )
}
