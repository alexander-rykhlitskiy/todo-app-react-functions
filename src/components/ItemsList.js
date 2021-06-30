function ItemsList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}

export default ItemsList;
