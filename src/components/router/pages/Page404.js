import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div>
      <h4 className="text-center">Page Not Found</h4>
      <Link to="/">Return Home</Link>
    </div>
  );
}
