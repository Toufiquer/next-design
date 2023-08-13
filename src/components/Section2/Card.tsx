import { FiShare2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
const Card = () => {
  return (
    <div className="mx-auto">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-start">

        <div className="bg-blue-500 rounded-full p-2 inline-block items-center justify-center">
          <FiShare2
            style={{
              height: "40px",
              width: "40px",
              color: "white",
            }}
          />
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <BsArrowRight
            style={{
              height: "20px",
              width: "40px",
              color: "blue",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
