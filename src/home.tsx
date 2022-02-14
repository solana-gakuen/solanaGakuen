import {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import Header from "./header";
import GridSchool from "./grid-school";
import GridSchoolMobile from "./grid-school-mobile";
import GridCard from "./grid-card";
import GridCardMobile from "./grid-card-mobile";
import Roadmap from "./roadmap";
import RoadmapMobile from "./roadmap-mobile";
import Faq from "./faq";
import FaqMobile from "./faq-mobile";
import SchoolTeam from "./school-team";
import SchoolTeamMobile from "./school-team-mobile";
import Footer from "./footer";
import FooterMobile from "./footer-mobile";

export interface HomeProps {
  startDate: number;
  txTimeout: number;
}

//
//     if (window.innerWidth > 900){
//         // show mobile layout
//         return (
//             <Grid container>
//                 <Header/>
//                 <GridSchool/>
//                 <GridCard/>
//                 <Roadmap/>
//                 <Faq/>
//                 <SchoolTeam/>
//                 <Footer/>
//             </Grid>
//         );
//     } else {
//         return (
//             <Grid container>
//                 <HeaderMobile/>
//                 <GridSchool/>
//                 <GridCard/>
//                 <Roadmap/>
//                 <Faq/>
//                 <SchoolTeam/>
//                 <Footer/>
//             </Grid>
//         );
//     }
// }

const Home = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the document title using the browser API
    }, [screenWidth]);

    const updateSize = ()=> {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);

    if (screenWidth > 900){
        // show mobile layout
        return (
            <Grid container>
                <Header/>
                <GridSchool/>
                <GridCard/>
                <Roadmap/>
                <Faq/>
                <SchoolTeam/>
                <Footer/>
            </Grid>
        );
    } else {
        return (
            <Grid container>
                {/*<HeaderMobile/>*/}
                <GridSchoolMobile/>
                <GridCardMobile/>
                <RoadmapMobile/>
                <FaqMobile/>
                <SchoolTeamMobile/>
                <FooterMobile/>
            </Grid>
        );
    }

};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export default Home;
