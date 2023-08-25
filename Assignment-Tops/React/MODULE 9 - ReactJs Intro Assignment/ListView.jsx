import React from "react";

const ListView = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ListView;
