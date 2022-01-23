import React, { useState } from "react";
import { createStyles } from "../../helpers/functions";
import styles from "./styles.module.css";

const SearchBar = ({ setSearchParams }) => {
  const [searchBy, setSearchBy] = useState("policyID");
  const [id, setID] = useState();
  return (
    <div className={styles.div0}>
      <div className={styles.div1}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Customer ID"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
        <button
          type="button"
          className={createStyles("btn btn-primary", styles.search)}
          onClick={() => {
            setSearchParams({
              searchBy: searchBy,
              ID: id,
            });
          }}
        >
          Search
        </button>
      </div>
      <div className={styles.div2}>
        <div>
          <input
            className={createStyles("form-check-input", styles.radio)}
            type="radio"
            name="site_name"
            value="customerID"
            checked={searchBy === "customerID"}
            onChange={(x) => {
              setSearchBy(x.target.value);
            }}
          />
          <label className="form-check-label">Customer ID</label>
        </div>
        <div>
          <input
            className={createStyles("form-check-input", styles.radio)}
            type="radio"
            name="site_name"
            value="policyID"
            checked={searchBy === "policyID"}
            onChange={(x) => {
              setSearchBy(x.target.value);
              console.log(x.target.value);
            }}
          />
          <label className="form-check-label">Policy ID</label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
