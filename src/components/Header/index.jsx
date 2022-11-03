import React from "react";
import { Autocomplete } from "@react-google-maps/api";
//icons
import { Wrapper, Content } from "./Header.style";
import { FaSearch } from "react-icons/fa";
const Header = () => (
  <>
    <Wrapper>
      <h4 className="logo">Travel Agency</h4>
      <Content>
        <h4>Explore New Places</h4>
        {/* <Autocomplete> */}
        <div className="search">
          <div className="searchicon">
            <FaSearch />
          </div>
          <input type="text" />
        </div>
        {/* </Autocomplete> */}
      </Content>
    </Wrapper>
  </>
);

export default Header;
