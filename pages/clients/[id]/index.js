import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log("Client id", router.query);

  return (
    <div>
      <h1>The projects of a {router.query?.id}!</h1>
    </div>
  );
};

export default ClientProjectsPage;
