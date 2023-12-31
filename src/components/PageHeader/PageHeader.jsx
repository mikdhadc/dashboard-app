import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  styled,
  alpha,
} from "@mui/material";
import {
  SearchRounded,
  Notifications,
  ArrowDropDown,
} from "@mui/icons-material";
import "./PageHeader.scss";
import profilePicture from "../../assets/profilePicture.jpg";
import logo from "../../assets/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.grey[400], 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[400], 0.4),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

function PageHeader() {
  return (
    <div>
      <Box style={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="page-header-main"
          style={{
            backgroundColor: "white",
            boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Toolbar style={{ justifyContent: "flex-end", margin: "0.5rem 0" }}>
            <div className="logo">
              <img src={logo} alt="logo" height={40} width="inherit" />{" "}
            </div>
            <Search>
              <SearchIconWrapper style={{ color: "#45474B" }}>
                <SearchRounded />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ "aria-label": "search" }}
                style={{ color: "black" }}
              />
            </Search>
            <div className="notifications margin-left-1">
              <IconButton
                style={{
                  color: "black",
                  padding: 0,
                  margin: 1,
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <Notifications />
                <div className="notification-active-badge"></div>
              </IconButton>
            </div>
            <div className="profile margin-left-1">
              <IconButton>
                <img
                  src={profilePicture}
                  alt="profile"
                  height={35}
                  width={35}
                  className="profile-picture"
                />
                <ArrowDropDown style={{ color: "black" }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default PageHeader;
