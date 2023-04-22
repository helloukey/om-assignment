import { useEffect } from "react";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: null | [];
  error: null | [];
};

const Modal = ({ isModal, setIsModal, data, error }: Props) => {
    useEffect(() => {}, [data, error, isModal])
  return (
    <>
      {/* Put this part before </body> tag */}
      <div className={`modal ${isModal ? "modal-open" : ""}`}>
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsModal(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {data ? "Request Sent Successfully!" : null}
            {error ? "Error sending Request!" : null}
          </h3>
          <p className="py-4">
            {data
              ? "We have successfully sent your request for mentorship."
              : null}
            {error
              ? "There is something went wrong while trying to send the request."
              : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
