import React from "react";

function Messages({ igDetails }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/messages")
      .then((r) => r.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  return (
    <div>
      <p>it will have some content here!</p>
    </div>
  );
}

export default Messages;
