import { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import closeModalImg from "@/assets/images/closeModalImg.svg";
import IconMobileCloseBtnSvg from "@/assets/images/mobileCloseBtnSvg.svg?react";
import { RecommendedFoodList } from "@/components";
import { RoutePath } from "@/routes/routes";

import { StyledModal } from "./Styled";

import { NotAllowProductList } from "@/types/Diary";

type Props = {
  closeModal: () => void;
  isOpen: boolean;
  modalData: NotAllowProductList;
};

interface KeyboardEvent {
  key: string;
}

const Modal: FC<Props> = ({ closeModal, modalData }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscPress);

    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [closeModal]);

  return createPortal(
    <StyledModal onClick={handleOverlayClick}>
      {isMobile && (
        <button
          className="mobileCloseModalBtn"
          type="button"
          onClick={closeModal}
        >
          <IconMobileCloseBtnSvg className="mobileCloseModalImg" />
        </button>
      )}
      <div className="modal">
        {!isMobile && (
          <button className="closeModalBtn " type="button" onClick={closeModal}>
            <img className="closeModalImg" src={closeModalImg} alt="close" />
          </button>
        )}
        <h2 className="modalTitle">Your recommended daily calorie intake is</h2>
        <p className="modalCaloriesAmount">
          {modalData.dailyRate}
          <span className="modalCaloriesUnits"> ккал</span>
        </p>
        <RecommendedFoodList listOfProducts={modalData.notAllowedProducts} />
        {/* <h4 className="modalListTitle">Foods you should not eat</h4>
        <InputGroup
            name="notAllowedProduct"
            labelText="search"
            value={query}
            onChange={handleChange}
          />
        <ol className="modalList">
          <li className="modalListItem">Flour products</li>
          <li className="modalListItem">Milk</li>
          <li className="modalListItem">Red meat</li>
          <li className="modalListItem">Smoked meats</li>
        </ol> */}
        <Link className="modalRegisterLink" to={RoutePath.REGISTER}>
          <button className="modalRegisterBtn" type="button">
            Start losing weight
          </button>
        </Link>
      </div>
    </StyledModal>,
    document.querySelector("#portal") as HTMLDivElement
  );
};

export default Modal;
