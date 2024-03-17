import { useState } from "react";

import { logOut } from "@/redux/user/operations";
import { selectUser } from "@/redux/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { ExitModal } from "@/components";

import { StyledUserMenuPanel } from "./Styled";

const UserMenuPanel = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const user = useAppSelector(selectUser);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledUserMenuPanel>
      <div className="tablet_desktopUserMenu">
        <span className="userName">{user?.username}</span>
        <div className="divider"></div>
        <button className="exitBtn" type="button" onClick={handleOpenModal}>
          Exit
        </button>
      </div>
      {isModalOpen && (
        <ExitModal onLogOut={handleLogOut} onCancel={handleCancel} />
      )}
    </StyledUserMenuPanel>
  );
};

export default UserMenuPanel;
