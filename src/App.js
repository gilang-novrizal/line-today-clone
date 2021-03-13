import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Route,  Switch} from "react-router-dom"
import { getNews } from "./action/newsAction";
import LandingPage from "./pages/landingPage"
import LifePage from "./pages/life";
import NewsPage from "./pages/news";
import RegionalPage from "./pages/regional";
import BizPage from "./pages/biz";
import CampusPage from "./pages/campus";
import CoronaPage from "./pages/corona";
import EnglishPage from "./pages/english";
import GamesPage from "./pages/games";
import GaulPage from "./pages/gaul";
import HobbiesPage from "./pages/hobbies";
import MoviePage from "./pages/movie";
import MusicPage from "./pages/music";
import OtomotifPage from "./pages/otomotif";
import ParentingPage from "./pages/parenting";
import SciTechPage from "./pages/sciTech";
import ShowBizPage from "./pages/showBiz";
import SportPage from "./pages/sport";
import StoryPage from "./pages/story";
import TrendingPage from "./pages/trending";
import VideoPage from "./pages/video";
import IntermezzoPage from "./pages/intermezzo";

const useStyles = makeStyles(()=>({
  "@media (min-width: 1024px)":{
    container:{
      maxWidth: "50vw",
      margin: "0 25vw",
    }
  }
}))

function App() {
  const classes = useStyles()
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getNews())
  }, [])
  return (
      <div className={classes.container}>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/TOP" component={LandingPage}/>
          <Route path="/SHOWBIZ" component={ShowBizPage}/>
          <Route path="/NEWS" component={NewsPage}/>
          <Route path="/LIFE" component={LifePage}/>
          <Route path="/REGIONAL" component={RegionalPage}/>
          <Route path="/INTERMEZZO" component={IntermezzoPage}/>
          <Route path="/TRENDING" component={TrendingPage}/>
          <Route path="/VIDEOS" component={VideoPage}/>
          <Route path="/SCI-TECH" component={SciTechPage}/>
          <Route path="/SPORTS" component={SportPage}/>
          <Route path="/BIZ" component={BizPage}/>
          <Route path="/MOVIE" component={MoviePage}/>
          <Route path="/STORY" component={StoryPage}/>
          <Route path="/HOBBIES" component={HobbiesPage}/>
          <Route path="/OTOMOTIF" component={OtomotifPage}/>
          <Route path="/PARENTING" component={ParentingPage}/>
          <Route path="/KATA" component={GaulPage}/>
          <Route path="/CORONA" component={CoronaPage}/>
          <Route path="/GAMES" component={GamesPage}/>
          <Route path="/MUSIC" component={MusicPage}/>
          <Route path="/ENGLISH" component={EnglishPage}/>
          <Route path="/CAMPUS" component={CampusPage}/>
        </Switch>
      </div>

  );
}

export default App;
