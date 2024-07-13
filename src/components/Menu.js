import React from "react";
import "../styles/Menu.css";
import {Data} from '../helpers/Data'
import MenuItem from "./MenuItem";


export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.iamge}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
