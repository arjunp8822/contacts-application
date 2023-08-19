import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import "./css/Main.css";
import CompanyCard from "./CompanyCard";

const Main = () => {
  // set all required states

  const [contacts, setContacts] = useState(null);
  const [userInputResult, setUserInputResult] = useState("");
  const [companyInputResult, setCompanyInputResult] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [companyNameInputResult, setCompanyNameInputResult] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(null);

  // fetch data and update states

  const api = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    const response = await axios.get(api);
    const data = await response.data;
    setContacts(data);
    setFilteredContacts(data);
    let temp = [];
    for (let i of data) {
      temp.push(i.company);
    }
    setCompanyData(temp);
    setFilteredCompanies(temp);
  };

  // filter user data

  const filterByUser = () => {
    setCompanyInputResult("");
    setCompanyNameInputResult("");
    let filtered = contacts?.filter((x) =>
      x.name.toLowerCase().includes(userInputResult.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const filterByCompany = () => {
    setUserInputResult("");
    setCompanyNameInputResult("");
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

  // filter company data

  const filterByCompanyName = () => {
    setCompanyInputResult("");
    setUserInputResult("");
    let filtered = companyData?.filter((x) =>
      x.name.toLowerCase().includes(companyNameInputResult.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  useEffect(() => {
    filterByCompanyName();
  }, [companyNameInputResult]);

  return (
    <div>
      <div className="filter-container container">
        <div className="button-container">
          <button onClick={() => setToggleCompany(false)}>Names</button>
          <button onClick={() => setToggleCompany(true)}>Companies</button>
        </div>
        {toggleCompany ? (
          <input
            type="text"
            placeholder="Search By Company Name"
            className="search"
            onChange={(e) => setCompanyNameInputResult(e.target.value)}
            value={companyNameInputResult}
          />
        ) : (
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
        )}
      </div>

      <main className="container">
        {toggleCompany ? (
          <div className="contacts">
            {filteredCompanies?.map((company) => (
              <CompanyCard
                name={company.name}
                catchPhrase={company.catchPhrase}
                bs={company.bs}
                initials={company.name
                  .split(/[ -]+/)
                  .map((n) => n[0])
                  .join("")}
              />
            ))}
          </div>
        ) : (
          <div className="contacts">
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
          </div>
        )}
      </main>
    </div>
  );
};

export default Main;
