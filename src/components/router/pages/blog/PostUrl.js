import { useParams } from "react-router-dom";

export default function Categories() {
const { url } = useParams();

  return <div>Blog Post Page = {url} </div>;
}
