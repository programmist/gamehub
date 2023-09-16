import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div>Game Detail Page</div>
      <div>Game ID: {id}</div>
    </>
  );
};

export default GameDetail;
