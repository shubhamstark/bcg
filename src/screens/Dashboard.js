import React, { useState } from "react";
import Policy from "../components/policy/Policy";
import SearchBar from "../components/searchbar/SearchBar";
import styles from "./styles.module.css";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useState({
    searchBy: "policyID",
    ID: null,
  });

  return (
    <div className={styles.container}>
      <SearchBar setSearchParams={setSearchParams} />
      {searchParams.ID != null && <Policy searchParams={searchParams} />}
    </div>
  );
};

export default Dashboard;
