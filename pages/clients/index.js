import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "muntashir", name: "Muntashir" },
    { id: "sajib", name: "Sajib" },
    { id: "shakil", name: "Shakil" },
  ];

  return (
    <div>
      <h1>The clients page!</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
