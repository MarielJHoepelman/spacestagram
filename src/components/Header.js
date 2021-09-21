import logo from "../images/logo.png";
import { HeaderWrapper } from "../styles";

const Header = () => (
  <HeaderWrapper>
    <img
      src={logo}
      title="Spacestragram logo"
      alt="Spacestagram written in lowercase with a font color that represents the colors of the galaxy, a mixture of different tones of purple, green, blue and white"
    />
  </HeaderWrapper>
);

export default Header;
