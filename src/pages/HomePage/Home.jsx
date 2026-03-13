import Banner from "./Banner";
import Category from "./Category";
import PetHeroes from "./PetHeroes";
import RecentListings from "./RecentListings";
import WhyAdopt from "./WhyAdopt";




const Home = () => {
    return (
        <div className="clr1">
            <Banner></Banner>
            <Category></Category>
            <RecentListings className="clr1"></RecentListings>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;
