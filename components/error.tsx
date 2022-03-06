import { Dispatch } from "react";

interface Props {
  setShowErrorComponent: Dispatch<React.SetStateAction<boolean>>;
}

const ErrorComponent = ({ setShowErrorComponent }: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span className="mb-12 font-bold text-red-600">
        Ops... something went wrong with your search!
      </span>
      <img
        src="https://c.tenor.com/7RirD_dcewgAAAAC/crying-pokemon.gif"
        alt="Crying Pokemon"
      />
      <button
        className="btn mt-12 rounded bg-red-600 px-6 py-2.5"
        onClick={() => setShowErrorComponent(false)}>
        <span className="font-bold text-white">Return to the last page</span>
      </button>
    </div>
  );
};

export default ErrorComponent;
