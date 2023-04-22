import { Link } from "react-router-dom";

type Props = {};
const Hero = (props: Props) => {
  return (
    <div className="hero min-h-full h-full pt-[20%]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Mentee!</h1>
          <p className="py-6">
            Receive career advice from professionals with years of experience in
            your field, and feel confident moving forward in your career.
          </p>
          <Link to="/mentors" className="btn btn-primary">
            Get Mentor
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
