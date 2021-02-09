import "./principal.css";
import { useHistory } from "react-router-dom";
import React from "react";
import { Button } from "@material-ui/core";

const Principal = () => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <div className={"principalContenaire"}>
      <div className={"menuContenaire"}>
        <div className={"listStyle"}>
          <Button
            onClick={()=>navigate("/movielist")}
            variant="contained"
            color="primary"
          >
            Movie List
          </Button>
        </div>
        <div className={"descritpionStyle"}>
          <Button
            onClick={() => navigate("/description")}
            variant="contained"
            color="primary"
          >
            Descritpion
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Principal;
