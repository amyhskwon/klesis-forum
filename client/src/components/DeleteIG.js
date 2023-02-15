import React from "react";

function DeleteIG({ igList, setIgList }) {
  function handleDeleteIg(id) {
    fetch(`/interest_groups/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          const updatedInterestGroups = igList.filter(
            (interest_group) => interest_group.id !== id
          );
          setIgList(updatedInterestGroups);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderIGList() {
    console.log("hi");
    return igList.map((ig) => {
      return (
        <div key={ig.id}>
          <p>{ig.name}</p>
          <button onClick={() => handleDeleteIg(ig.id)}>Delete</button>
        </div>
      );
    });
  }
  return <div>{renderIGList()}</div>;
}

export default DeleteIG;
