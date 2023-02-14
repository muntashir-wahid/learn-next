import { useRouter } from "next/router";

const PortfilioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.projectid);

  return <h1>The protfolio project page</h1>;
};

export default PortfilioProjectPage;
