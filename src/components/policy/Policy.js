import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getPoliciesAPI, patchPolicyAPI } from "../../apis/policy";
import { createStyles } from "../../helpers/functions";
import { Editable } from "./Editable";
import Button from "../button/Button";

const Policy = ({ searchParams }) => {
  const [policyData, setPolicyData] = useState({});
  const [editing, setEditing] = useState(false);
  const [oldPolicyData, setOldPolicyData] = useState({});
  const [networkError, setNetworkError] = useState({ api: null, type: null });

  console.log(policyData, "apple");

  useEffect(() => {
    if (searchParams.ID != null) {
      getPoliciesAPI(searchParams.searchBy, searchParams.ID)
        .then((data) => {
          setPolicyData(data);
          setOldPolicyData(data);
          setNetworkError({ api: null, type: null });
        })
        .catch((e) => {
          if (e.response.status === 404) {
            setNetworkError({ api: "getPoliciesAPI", type: "notFound" });
          }
        });
    }
  }, [searchParams]);

  if (networkError.type == "notFound") {
    return <p>No policy with given search parameters.</p>;
  }

  return (
    <div className={createStyles("card", styles.container)}>
      <h3>Policy Detail</h3>
      <div className={styles.column}>
        <div className={styles.data}>
          <Editable
            value={policyData.id}
            objectKey="id"
            label="Policy ID"
            setter={setPolicyData}
            editing={editing}
          />
          <Editable
            value={policyData.customer_id}
            objectKey="customer_id"
            label="Customer ID"
            setter={setPolicyData}
            editing={editing}
          />
          <Editable
            value={policyData.purchase_date}
            objectKey="purchase_date"
            label="Purchase Date"
            setter={setPolicyData}
            editing={editing}
            editable={false}
          />
          <Editable
            value={policyData.vehicle_segment}
            objectKey="vehicle_segment"
            label="Vehicle Segment"
            setter={setPolicyData}
            editing={editing}
          />
          <Editable
            value={policyData.fuel}
            objectKey="fuel"
            label="Fuel"
            setter={setPolicyData}
            editing={editing}
          />
          <Editable
            value={policyData.premium}
            objectKey="premium"
            label="Premium"
            setter={setPolicyData}
            editing={editing}
          />
        </div>
        <div className={styles.data}>
          <Editable
            value={policyData.bodily_injury_liability}
            objectKey="bodily_injury_liability"
            label="Bodily Injury Liability"
            setter={setPolicyData}
            editing={editing}
            boolean={true}
          />
          <Editable
            value={policyData.personal_injury_protection}
            objectKey="personal_injury_protection"
            label="Personal Injury Protection"
            setter={setPolicyData}
            editing={editing}
            boolean={true}
          />
          <Editable
            value={policyData.property_damage_liability}
            objectKey="property_damage_liability"
            label="Property Damage Liability"
            setter={setPolicyData}
            editing={editing}
            boolean={true}
          />
          <Editable
            value={policyData.collosion}
            objectKey="collosion"
            label="Collosion"
            setter={setPolicyData}
            editing={editing}
            boolean={true}
          />
          <Editable
            value={policyData.comprehensive}
            objectKey="comprehensive"
            label="Comprehensive"
            setter={setPolicyData}
            editing={editing}
            boolean={true}
          />
        </div>
      </div>
      <div>
        <h3>Customer Detail</h3>
      </div>
      <div>
        {!editing ? (
          <Button
            text="Edit"
            onClick={() => {
              setEditing(true);
            }}
          />
        ) : (
          <div>
            <Button
              text="Cancel"
              onClick={() => {
                setEditing(false);
                // setPolicyData(oldPolicyData);
              }}
            />
            <Button
              text="Save"
              onClick={() => {
                setEditing(false);
                patchPolicyAPI(policyData).catch((e) => {
                  // setNetworkError({ api: "patchPolicyAPI", type: e.message });
                  console.log(e.message, "yaha se hua print");
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Policy;
