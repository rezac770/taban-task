import { Box, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navs } from "../../data/navs";

const NavContoler = () => {
  return (
    <Box
      sx={{
        maxWidth: "450px",
        width: "400px",

        borderRadius: " 50px 50px 0px 0px",
        boxShadow: "1px 1px 10px  black",

        position: "fixed",
        right: "50%",
        bottom: "0",
        transform: "translate(50% , 0)",
      }}
      className="nav-parent"
    >
      <nav className="nav-item">
        <List sx={{ display: "flex" }}>
          {navs.map((nav) => {
            return (
              <ListItem key={nav.id}>
                <NavLink
                  className={`${({ isActive }) =>
                    isActive ? "active" : "inactive"} links`}
                  to={`${nav.href}`}
                >
                  <i className={nav.clssName}></i>
                  <span className="text-nav">{nav.title}</span>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default NavContoler;
