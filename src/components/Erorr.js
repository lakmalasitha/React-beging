import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error">
      <h1>Opps!! somthing went wrong</h1>
      <h2>{err.status}</h2>
      <p>{err.statusText}</p>
    </div>
  );
};

export default Error;
