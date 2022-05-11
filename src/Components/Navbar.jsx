
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";



const Navbar = () => {

  return (
    <Segment  inverted color="blue" >
      <Menu inverted secondary >
        <Menu.Item
          data-cy="home-tab"
          name="Home"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          data-cy="football-tab"
          name="Football"
          as={NavLink}
          to={{ pathname: "/football" }}
        />
        <Menu.Item
          data-cy="golf-tab"
          name="Golf"
          as={NavLink}
          to={{ pathname: "/golf" }}
        />
          <Menu.Item
          data-cy="product-tab"
          name="Shop"
          as={NavLink}
          to={{ pathname: "/products" }
        }
        />  
      </Menu>
    </Segment>
  );
};

export default Navbar;
