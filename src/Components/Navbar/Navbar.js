import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const navigate = useNavigate();

  const changeNav = (id) => {
    navigate(`/${id}`, {
      replace: true,
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => changeNav("")}>
          Learn Japanese
        </div>
        <div className="navbar-container-right">
          <div>
            <Menu>
              <MenuButton
                className="hidden"
                as={IconButton}
                colorScheme="brown"
                color="white"
                icon={<HamburgerIcon />}
              />
              <MenuList bg="rgb(85, 172, 185)" border={"none"}>
                <MenuItem
                  color={"white"}
                  bg="rgb(85, 172, 185)"
                  _focus={{ bg: "rgb(73, 150, 162)" }}
                  _hover={{ bg: "rgb(73, 150, 162)" }}
                  onClick={() => changeNav("hiragana")}
                >
                  Hiragana
                </MenuItem>
                <MenuItem
                  color={"white"}
                  bg="rgb(85, 172, 185)"
                  _hover={{ bg: "rgb(73, 150, 162)" }}
                  onClick={() => changeNav("katakana")}
                >
                  Katakana
                </MenuItem>
                <MenuItem
                  color={"white"}
                  bg="rgb(85, 172, 185)"
                  _hover={{ bg: "rgb(73, 150, 162)" }}
                  onClick={() => changeNav("both")}
                >
                  Kanji
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="navbar-button" onClick={() => changeNav("hiragana")}>
            Hiragana
          </div>
          <div className="navbar-button" onClick={() => changeNav("katakana")}>
            Katakana
          </div>
          <div className="navbar-button" onClick={() => changeNav("both")}>
            Kanji
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
