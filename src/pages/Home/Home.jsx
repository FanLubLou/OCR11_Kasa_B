import Banner from "../../components/Banner/Banner";
import CardContainer from '../../components/CardContainer/CardContainer';
import HomeImage from '../../assets/banner_home.png'

export default function Home() {
  return (
    <div>
        <Banner image={HomeImage} />      
        <CardContainer />                     
    </div>
  )
}
