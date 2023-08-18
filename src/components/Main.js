import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import "./css/Main.css";

const Main = () => {
  const [contacts, setContacts] = useState(null);
  const [userInputResult, setUserInputResult] = useState("");
  const [companyInputResult, setCompanyInputResult] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(null);

  const api = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    const response = await axios.get(api);
    const data = await response.data;
    setContacts(data);
    setFilteredContacts(data);
  };

  const filterByUser = () => {
    setCompanyInputResult("");
    let filtered = contacts?.filter((x) =>
      x.name.toLowerCase().includes(userInputResult.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const filterByCompany = () => {
    setUserInputResult("");
    let filtered = contacts?.filter((x) =>
      x.company.name.toLowerCase().includes(companyInputResult.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterByUser();
  }, [userInputResult]);

  useEffect(() => {
    filterByCompany();
  }, [companyInputResult]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search By Name"
          className="search"
          onChange={(e) => setUserInputResult(e.target.value)}
          value={userInputResult}
        />
        <input
          type="text"
          placeholder="Search By Company"
          className="search"
          onChange={(e) => setCompanyInputResult(e.target.value)}
          value={companyInputResult}
        />
      </div>
      <main className="container contacts">
        {filteredContacts?.map((contact) => (
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
