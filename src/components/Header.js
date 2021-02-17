import Typed from "react-typed";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>
          {" "}
          Web Development/Design, App Development/Design, Cyber Security and
          Software Engineering
        </h1>
        <Typed
          className="typed-text"
          strings={["web design", "Web Development", "Android Apps"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Button> CONTACT ME </Button>
      </div>
    </div>
  );
};

export default Header;
