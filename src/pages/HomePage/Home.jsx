import Banner from "./Banner";
import Category from "./Category";
import PetAdopters from "./PetAdopters";
import RecentListings from "./RecentListings";
import WhyAdopt from "./WhyAdopt";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <RecentListings></RecentListings>
            <WhyAdopt></WhyAdopt>
            <PetAdopters></PetAdopters>
            
        </div>
    );
};

export default Home;
