import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import TopBanner from "../Components/TopBanner";
import TopBannerTest from "../Components/TopBannerTest";
import VideoHomePage from '../Components/VideoHomePage';
import Logo from "../Components/Logo";
import Honor from "../Components/Honor";
import Honor1 from "../Components/Honor1";
import Footer from "../Components/Footer";
import Count from "../Components/Count";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";
import Before_Sponsors from '../Components/Before_Sponsors';
import Alumni1 from "../Components/Alumni1";
function Home(props) {
    return (
        <Fragment>
           
            <TopBanner/>
          
            <Honor/>
            
            <Alumni1/>
           
            <Support/>
            <Sponsor/>

        </Fragment>
    );
}

export default Home;