import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Profile = () => (
  <div>
    <MainNavbar />
    <div>
      <Link to="/write">
        <Button css={{ pointerEvents: "none" }}>Writing</Button>
      </Link>
    </div>
  </div>
);

export default Profile;
