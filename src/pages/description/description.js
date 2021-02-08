import "./description.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moviecard from "../../components/moviecard/moviecard";
import DescriptionC from "../../components/descriptionc/descriptionc";
const initListD = [
  {
    description:
      "عائلة كي الناس هو فيلم كوميدي جزائري صدر سنة 1990. إخراج عمار تريباش، بطولة عثمان عريوات",
    url: "https://www.youtube.com/embed/t4f_ryrecrQ",
  },
];

const Description = () => {
  const [movieD, setMovieD] = useState(initListD);
  const [descriptionD, setDescriptionD] = useState(initListD);
  return (
    <div className={"contenairDesc"}>
      <h1>Descritpion</h1>
      <div className={"description"}>
        {movieD &&
          movieD.map((movieD) => (
            <DescriptionC description={movieD.description} url={movieD.url} />
          ))}
      </div>
      <div className={"footerDescription"}>
        <Link to="/principal">
          <h3>Principal</h3>
        </Link>
        <Link to="/movielist">
        <h3>Ma list de film</h3>
      </Link>
      </div>
      
    </div>
  );
};

export default Description;
