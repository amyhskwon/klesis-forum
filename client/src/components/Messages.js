import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Messages({ igDetails, messages, users, user }) {
  const history = useHistory();
  const [messageData, setMessageData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [text, setText] = useState("");

  const matchId = (id) => {
    const userArray = users.find((user) => user.id === id);
    return userArray.first_name;
  };

  useEffect(() => {
    fetch("/messages")
      .then((r) => r.json())
      .then((data) => setMessageData(data));
  }, []);

  function handlePostMessage(e) {
    e.preventDefault();
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        interest_group_id: igDetails.id,
        content: text,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setMessageData(...messageData, data));
        window.location.reload();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      {messages.length > 0 ? (
        <div>
          {messages.map((message) => {
            return (
              <div key={`message${message.id}`}>
                <p>{matchId(message.user_id)} said...</p>
                <h4>"{message.content}"</h4>
              </div>
            );
          })}
          <form onSubmit={(e) => handlePostMessage(e)}>
            <input
              type="text"
              value={text}
              placeholder="Message..."
              onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      ) : (
        <div>
          <h4>No chats yet... Start a conversation!</h4>
          <form onSubmit={(e) => handlePostMessage(e)}>
            <input
              type="text"
              value={text}
              placeholder="Message..."
              onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Messages;
