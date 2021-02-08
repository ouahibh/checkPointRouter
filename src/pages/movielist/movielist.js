import "./movielist.css";
import React, { useState } from "react";
import Moviecard from "../../components/moviecard/moviecard";
import Description from "../description/description";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const initList = [
  {
    title: "عائلة كي الناس",
    description:
      "عائلة كي الناس هو فيلم كوميدي جزائري صدر سنة 1990. إخراج عمار تريباش، بطولة عثمان عريوات",
    rate: 9,
    url: "https://www.youtube.com/embed/t4f_ryrecrQ",
  },
];

const Movielist = () => {
  const [movie, setMovie] = useState(initList);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [titlef, setTitlef] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [ratef, setRatef] = useState("");
  const [url, setUrl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ajouter = () => {
    const newFlim = {
      title,
      description,
      rate,
      url,
    };

    movie.push(newFlim);
    setMovie(movie);
    setOpen(false);
  };

  const filtrer = () => {
    let newList = [];
    if (titlef && ratef) {
      newList = movie.filter(
        (movie) => movie.title == titlef && movie.rate == ratef
      );
    } else if (titlef) {
      newList = movie.filter((movie) => movie.title == titlef);
    } else if (ratef) {
      newList = movie.filter((movie) => movie.rate == ratef);
    }
    setMovie(newList);
  };

  return (
    <div className={"contenairG"}>
      <div className={"filter-button"}>
        <Button
          style={{ width: 200 }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Ajouter un film
        </Button>
        <TextField
          style={{ width: 200 }}
          autoFocus
          margin="dense"
          label="Titre du film"
          fullWidth
          value={titlef}
          onChange={(event) => setTitlef(event.target.value)}
        />
        <TextField
          style={{ width: 200 }}
          autoFocus
          margin="dense"
          label="Note"
          fullWidth
          value={ratef}
          onChange={(event) => setRatef(event.target.value)}
        />
        <Button
          style={{ width: 200 }}
          color="primary"
          variant="outlined"
          onClick={filtrer}
        >
          Filtrer
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Ajouter un nouveau film
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Titre du film"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Rate"
            type={"number"}
            fullWidth
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            label="Url"
            fullWidth
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={ajouter} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
      <div className={"listC"}>
        {movie &&
          movie.map((movie) => (
            <Moviecard
              title={movie.title}
              description={movie.description}
              rate={movie.rate}
              url={movie.url}
            />
          ))}
      </div>
      <div className={"footer"}>
        <Link to="/principal">
          <h3>Principal</h3>
        </Link>
        <Link to="/description">
          <h3>Description</h3>
        </Link>
      </div>
    </div>
  );
};

export default Movielist;
