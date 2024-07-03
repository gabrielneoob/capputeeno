import { useNavigate } from "react-router-dom";
import BackwardIcon from "../icons/backward-icon";
import * as S from "./styles";
import { BackButtonProps } from "./types";
const BackButton = ({ path }: BackButtonProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (typeof path === "number") {
      navigate(path);
    } else {
      navigate(path.toString());
    }
  };

  return (
    <S.BackButton onClick={handleNavigate}>
      <BackwardIcon />
      <p>Voltar</p>
    </S.BackButton>
  );
};

export default BackButton;
