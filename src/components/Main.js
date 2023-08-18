import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import "./css/Main.css";

const Main = () => {
  const [contacts, setContacts] = useState(null);

  const api = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    const response = await axios.get(api);
    const data = await response.data;
    setContacts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>User Search</div>
      <main className="container contacts">
        {contacts?.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            company={contact.company.name}
            initials={contact.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          />
        ))}
      </main>
    </div>
  );
};

export default Main;
