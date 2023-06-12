import {Bounce, Flip, Roll, Rotate} from "react-awesome-reveal";
import {Link} from "react-router-dom";
import {useRouteError} from "react-router-dom";
const ErrorPage = () => {
  const {error, status, statusText} = useRouteError();
  console.error(error);
  return (
    <div className="max-w-4xl mx-auto bg-red-500 my-40 text-center p-3">
      <Bounce>
        {" "}
        <h5 className="text-2xl text-blue-100">Oh NO!</h5>
      </Bounce>

      <Bounce>
        <h2 className="text-8xl font-bold text-orange-200">
          <span className="">Error</span> {status || "Unknown"}
        </h2>
      </Bounce>
      <Rotate>
        {" "}
        <img
          className="w-1/2 mx-auto h-3/6 my-2"
          src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?w=740&t=st=1686575979~exp=1686576579~hmac=7ac71bce707a2b4f15f9bd31482f2de43b6824f9f5276237a3ff05dc40438511"
        />
      </Rotate>
      <p>
        {" "}
        <p className="text-xl text-pink-100">
          There's a glitch. Sorry for the error
        </p>
      </p>
      <p className="text-green-300 font-semibold text-xl">{statusText || ""}</p>
      <Bounce>
        {" "}
        <p className="font-bold  text-white text-3xl">{error?.message}</p>{" "}
      </Bounce>

      <button className="bg-green-300 btn  border-0 m-2">
        <Link to="/" className="text-decoration-none text-black">
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
