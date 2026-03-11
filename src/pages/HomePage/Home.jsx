import Banner from "./Banner";
import Category from "./Category";
import PetHeroes from "./PetHeroes";
import RecentListings from "./RecentListings";
import WhyAdopt from "./WhyAdopt";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <RecentListings></RecentListings>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
            
        </div>
    );
};

export default Home;
