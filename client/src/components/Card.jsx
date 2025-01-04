import Signup from "./Signup";
import Signin from "./Signin";

const Card = ({ cardtitle, cardbody, cardbutton }) => {
  return (
    <div className="card signupcard">
      <div className="card-body">
        <h5 className="card-title">{cardtitle}</h5>
        <p className="card-text">{cardbody}</p>
        {cardbutton === "signup" && <Signup />}
        {cardbutton === "signin" && <Signin />}
      </div>
    </div>
  );
};

export default Card;
