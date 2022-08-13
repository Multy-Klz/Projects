import React, { MouseEvent, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import "./List.css";

interface ListProps {
  token: string;
  baseUrl: string;
}

function List(props: ListProps) {
  const [breedTitle, setBreedTitle] = useState("chihuahua");
  const [breedList, setBreedList] = useState([]);

  const queryString = "?breed=";

  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    defaulBreed();
  }, []);

  function renderData() {
    function handleShowDialog(e: MouseEvent, ref: string) {
      e.preventDefault();

      setImgIndex(ref);
      setShow(true);

      console.log("cliked");
    }

    return breedList.map((ref) => {
      return (
        <div className="imgContainer">
          <img
            id="breedImg"
            onClick={(e) => handleShowDialog(e, ref)}
            src={ref}
            alt={breedTitle}
          />
        </div>
      );
    });
  }

  function renderImj() {
    return <div className="flex-container">{renderData()} </div>;
  }

  async function onClick(e: MouseEvent, selectedBreed: string) {
    e.preventDefault();

    setBreedList([]);

    let resp = await fetch(
      props.baseUrl + "/list" + queryString + selectedBreed,
      {
        method: "GET",
        headers: {
          Authorization: `${props.token}`,
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setBreedTitle(resp.breed);
    setBreedList(resp.list);

    console.log(resp);
  }

  function atualizar() {
    console.log("userToken: ", props.token);
  }

  async function defaulBreed() {
    let resp = await fetch(props.baseUrl + "/list" + queryString + breedTitle, {
      method: "GET",
      headers: {
        Authorization: `${props.token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setBreedTitle(resp.breed);
    setBreedList(resp.list);

    console.log(resp);
  }

  return (
    <>
      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />
        <div id="caption"></div>
      </div>

      <div style={{ justifyContent: "space-around" }}>
        <Button
          style={{ margin: "10px" }}
          onClick={(e) => onClick(e, "chihuahua")}
        >
          {" "}
          Chihuahua
        </Button>
        <Button style={{ margin: "10px" }} onClick={(e) => onClick(e, "husky")}>
          {" "}
          Husky
        </Button>
        <Button style={{ margin: "10px" }} onClick={(e) => onClick(e, "pug")}>
          {" "}
          Pug
        </Button>
        <Button
          style={{ margin: "10px" }}
          onClick={(e) => onClick(e, "labrador")}
        >
          {" "}
          Labrador
        </Button>
      </div>
      {renderImj()}
      <Modal
        dialogClassName="dialog-flex"
        contentClassName="imgBox"
        show={show}
        onHide={handleClose}
      >
        <ModalHeader closeButton />
        <ModalBody>
          <img style={{ width: "100vh" }} src={imgIndex} alt={breedTitle} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default List;
