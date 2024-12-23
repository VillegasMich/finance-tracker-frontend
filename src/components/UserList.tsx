import { useUser } from "../hooks/useUser";

const UserList = () => {
  const { useFetchUsers } = useUser();
  const { data: users, isPending, isError, error } = useFetchUsers();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error loading transactions <span style={{ color: "red" }}>{error.message}</span></div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} - {user.email} - {user.createdAt} - {user.incomes.map((income) => (
            <li key={income.id} style={{ listStyle: "none", color: "green" }}>
              {income.description} - ${income.amount} - {income.createdAt}
            </li>
          ))} {user.expenses.map((expense) => (
            <li key={expense.id} style={{ listStyle: "none", color: "red" }}>
              {expense.description} - ${expense.amount} - {expense.createdAt}
            </li>
          ))}
        </li>
      ))}
    </ul>
  )
};

export default UserList;
