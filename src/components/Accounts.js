
function Accounts({ accounts }) {
  return (
    <div className="card">
      {accounts.map((acc) => (
        <li key={acc.id}>
          {acc.name} - {acc.email}
        </li>
      ))}
    </div>
  );
}

export default Accounts;
