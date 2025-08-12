import { useLoaderData } from "react-router-dom";

export default function UserProfile() {
  const { username, joined } = useLoaderData();

  return (
    <div>
      <h2>User Profile: {username}</h2>
      <p>Joined: {joined}</p>
    </div>
  );
}
