import { FiShare2 } from "react-icons/fi";

const Profile = () => {
    return (
      <div className="flex w-full items-center justify-center my-4">
        <div className="flex gap-2">
          <div className="bg-blue-500 h-[58px] rounded-full p-2 inline-block items-center justify-center">
            <FiShare2
              style={{
                height: "40px",
                width: "40px",
                color: "white",
              }}
            />
          </div>
          <div className="px-2 text-start">
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-100">
                Need a help in Claim?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500">
              Go to this step by step guideline process
            </p>
          </div>
        </div>
      </div>
    );
};

export default Profile;