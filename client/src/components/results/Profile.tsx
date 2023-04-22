import { useState } from "react";
import randomUser from "../../assets/random-user.jpg";
import Modal from "../Modal";

type Props = {};
const Profile = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [data, setData] = useState<null | []>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | []>(null);

  const handleSend = () => {
    setError(null);
    setIsLoading(true);

    fetch("http://localhost:5000/send", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
        setIsModal(true);

      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setIsModal(true);
      });
  };

  return (
    <div className="flex flex-col">
      <img
        src={randomUser}
        alt="random-user"
        className="w-full h-auto min-w-[150px] max-w-sm rounded-md mx-auto object-cover"
      />
      <button
        className="w-full max-w-sm btn btn-accent rounded-full mt-4 mx-auto"
        onClick={handleSend}
      >
        {isLoading ? "Sending..." : "Send Request"}
      </button>
      <Modal isModal={isModal} setIsModal={setIsModal} data={data} error={error} />
    </div>
  );
};
export default Profile;
