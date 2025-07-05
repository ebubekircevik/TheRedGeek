import { getUsers } from "@/api/users";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <table className="w-full border rounded bg-white text-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Active</th>
            <th className="py-2 px-4 text-left">Interests</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-t text-black">
              <td className="py-2 px-4">
                {user.name} {user.lastname}
              </td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.isActive ? "Yes" : "No"}</td>
              <td className="py-2 px-4">{user.interests.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
