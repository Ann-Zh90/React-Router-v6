const List = (props) => {
  const { listData = [] } = props;

  return (
    <ul>
      {listData.map((listItem) => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
  );
};

export default List;
