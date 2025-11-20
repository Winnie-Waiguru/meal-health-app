import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import FormWrapper from "./FormWrapper";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-10 flex flex-col">
      <div className="flex flex-row items-center md:justify-evenly gap-[100px] md:gap-0 ">
        <button type="button" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-6 icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <h1 className="heading-text">Register</h1>
      </div>

      <FormWrapper>
        <FormInput
          id="username"
          label="Name"
          type="text"
          placeholder="John Doe"
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="johndoe@gmail.com"
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          icon={FaEyeSlash}
        />

        <FormInput
          id="confirm-password"
          label="Confirm password"
          type="password"
          icon={FaEyeSlash}
        />

        <PrimaryButton text="Sign Up" />

        <p className="normal-text">
          Already have an account?{" "}
          <Link to="/login" className="cta-text">
            Log In
          </Link>
        </p>
      </FormWrapper>
    </div>
  );
}

export default SignUpPage;
