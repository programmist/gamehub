import { Trailer } from "../../entities/Trailer";

interface Props {
  trailer: Trailer;
}

const GameTrailer = ({ trailer }: Props) => {
  return (
    <video poster={trailer.preview} preload="auto" controls>
      <source src={trailer.data["480"]} type="video/mp4" />
    </video>
  );
};

export default GameTrailer;
