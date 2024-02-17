import { StyledUserMenu } from "./Styled";

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <span className="userName">Mykyta</span>
      <div className="divider"></div>
      <button className="exitBtn" type="button">
        Exit
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
