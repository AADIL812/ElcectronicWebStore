import Card from "./Card";
import Sections from "./Sections";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homein">
          <Card
            cardtitle={"Sign Up"}
            cardbody={"Don't have an account? Sign up to get amazing deals."}
            cardbutton={"signup"}
          />
          <Card
            cardtitle={"Sign In"}
            cardbody={
              "Having an account? Please sign in to continue discovering deals"
            }
            cardbutton={"signin"}
          />
        </div>
        <Sections />
      </div>
    </>
  );
};
export default Home;
