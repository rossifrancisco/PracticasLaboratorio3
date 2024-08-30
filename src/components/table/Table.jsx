const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td><b>Brand</b></td>
          <td><b>Net Income</b></td>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>$ {item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;