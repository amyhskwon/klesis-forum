import React, { useState } from "react";
import CreateIG from "./CreateIG";

function CreateIgButton() {
  const [showCreateIgForm, setShowCreateIgForm] = useState(false);

  function showOrHideForm() {
    setShowCreateIgForm(!showCreateIgForm);
  }

  return (
    <div>
      <button onClick={showOrHideForm}>Create an Interest Group</button>
      {showCreateIgForm ? <CreateIG /> : null}
    </div>
  );
}

export default CreateIgButton;
