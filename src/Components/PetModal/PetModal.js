import React from "react";
import Modal from "../UI/Modal";
import styles from "./PetModal.module.css";

const PetModal = (props) => {
  const pet = props.onShowClickedPet;
  console.log(pet);
  return (
    <Modal onClose={props.onCloseModal}>
      <div className={styles["modal-flex"]}>
        <img
          className={styles["modal-img"]}
          src={pet.primary_photo_cropped.small}
        ></img>
        <div className={styles["flex-info"]}>
          <h2 className={styles.name}>{pet.name}</h2>
          <h3 className={styles.breed}>{pet.breeds.primary}</h3>
          <p>{pet.size}</p>
          <p>{pet.age}</p>
          <p>{`${
            pet.tags.length <= 0
              ? "No Description"
              : pet.tags[0] + "/" + pet.tags[1] + "/" + pet.tags[2]
          }`}</p>
        </div>
      </div>
      <div className={styles["modal-bottom"]}>
        <div>
          <p>{pet.status}</p>
          <p>{`City: ${pet.contact.address.city}`}</p>
          <p>{`State: ${pet.contact.address.state} `}</p>
          <p>{pet.contact.phone}</p>
          <p>{pet.contact.email}</p>
        </div>
        <div className={styles.actions}>
          <a className={styles.button} href={pet.url} target="_blank">
            Adopt!
          </a>
          <button className={styles.close} onClick={props.onCloseModal}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PetModal;
