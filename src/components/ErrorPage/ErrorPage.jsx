import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>OOPS !!!!</h2>
      <Link to="/">
        <button className="btn">Go back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
