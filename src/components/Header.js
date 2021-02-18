import Typed from "react-typed";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>
          {" "}
          Web Development/Design, App Development/Design, CCNA and Software
          Development
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "web Design",
            "Web Development",
            "Android Apps",
            "Desktop Apps",
            "Cisco Certified Network Associate",
          ]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
        <Button className="btn-main-offer"> CONTACT ME </Button>
      </div>
    </div>
  );
};

export default Header;
