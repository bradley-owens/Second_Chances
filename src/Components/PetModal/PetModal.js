import React from "react";
import Modal from "../UI/Modal";
import styles from "./PetModal.module.css";

const PetModal = (props) => {
  const pet = props.onShowClickedPet;
  console.log(pet);
  return (
    <Modal onClose={props.onCloseModal}>
      <img src={pet.primary_photo_cropped.small}></img>
      <h2>{pet.name}</h2>
      <h3>{pet.breeds.primary}</h3>
      <p>{pet.size}</p>
      <p>{pet.age}</p>
      <p>{`${
        pet.tags.length <= 0
          ? pet.status
          : pet.tags[0] + "/" + pet.tags[1] + "/" + pet.tags[2]
      }`}</p>
      <p>{`City: ${pet.contact.address.city} State:${pet.contact.address.state} `}</p>
      <p>{pet.status}</p>
      <a href={pet.url}>{pet.url}</a>
      <p>{pet.contact.phone}</p>
      <p>{pet.contact.email}</p>
      <button onClick={props.onCloseModal}>Close</button>
    </Modal>
  );
};

export default PetModal;
