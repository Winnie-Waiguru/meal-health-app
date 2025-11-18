import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <img src="Logo.png" alt="meal health app logo" />

      <div>
        <Link to="/signup">
          <PrimaryButton children="Join Us" />
        </Link>
        <p className="text-xl text-[#49555F]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#266431] font-bold underline-offset-2"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
