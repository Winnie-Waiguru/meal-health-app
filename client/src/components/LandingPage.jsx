import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <img src="Logo.png" alt="meal health app logo" />

      <div>
        <Link to="/signup">
          <PrimaryButton text="Join Us" />
        </Link>
        <p className="normal-text">
          Already have an account?{" "}
          <Link to="/login" className="cta-text">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
