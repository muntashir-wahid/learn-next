import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log("Client project id", router.query);

  return (
    <div>
      <h1>
        The {router.query?.clientprojectid} project page for {router.query?.id}!
      </h1>
    </div>
  );
};

export default SelectedClientProjectPage;
