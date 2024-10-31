import Link from "next/link";
import { useRouter } from "next/navigation";

const Blog = ({ props }) => {
  const router = useRouter();
  const toDetailCard = () => {
    router.push(`/${props.id.toString()}`);
  };
  return (
    <div className="card" onClick={toDetailCard}>
      <img src={props.cover_image} alt={props.title} />
      <h2>{props.title}</h2> <p>{props.description}</p>
      <div className="user-info">
        <img src={props.user.profile_image} alt={props.user.name} />
        <p>{props.user.name}</p>
      </div>
      <Link href={props.url}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default Blog;
