import React from "react";
import Nav from "./Nav.js";
var UpdateProfil = (props) => {
  return (
    <div>
        <Nav changepattoprofil={props.changepattoprofil} />
      <h4 class="text-warning text-center pt-5">Update Your Profil</h4>
    </div>
  );
};
export default UpdateProfil;
