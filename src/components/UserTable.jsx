import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Status
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border-b">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <td className="px-6 py-4 text-sm text-gray-800 border-b">
                {user.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 border-b">
                {user.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 border-b">
                {user.role}
              </td>
              <td className="px-6 py-4 text-sm border-b">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center border-b space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
