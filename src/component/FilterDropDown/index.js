import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { thisMonthCheckinUrl } from "../../utils";
import "./style.css";
const FilterDropDown = ({ todays, thisWeek, thisMonth, title, setTitle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>{title}</DropdownToggle>
      <DropdownMenu right style={{ fontSize: "10px" }}>
        {/* <DropdownItem header>Header</DropdownItem> */}
        <DropdownItem
          onClick={() => {
            setTitle("Today's");
            todays();
          }}
        >
          Today's
        </DropdownItem>
        {thisWeek?<>
          <DropdownItem
          onClick={() => {
            setTitle("This Week's");
            thisWeek();
          }}
        >
          This Week
        </DropdownItem>
        </>:<></>}
        {thisMonth?<>
          <DropdownItem
          onClick={() => {
            setTitle("This Months's");
            thisMonth();
          }}
        >
          This Month
        </DropdownItem>
        </>:<></>}
        {/* <DropdownItem text>Dropdown Item Text</DropdownItem> */}
        {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
        {/* <DropdownItem divider /> */}
        {/* <DropdownItem>Foo Action</DropdownItem> */}
        {/* <DropdownItem>Bar Action</DropdownItem> */}
        {/* <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default FilterDropDown;
