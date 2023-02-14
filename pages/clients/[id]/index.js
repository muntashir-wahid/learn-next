import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    console.log(router);
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: router.query?.id,
        clientprojectid: "projectA",
      },
    });
  };

  return (
    <div>
      <h1>The projects of {router.query?.id}!</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
