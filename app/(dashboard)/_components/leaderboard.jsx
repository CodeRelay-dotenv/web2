import React, { useEffect, useState } from 'react';
import { useApiMutation } from '@/hooks/useApiMutation';
import { api } from '@/convex/_generated/api';

function Leaderboard({category}) {
  const [users, setUsers] = useState([]);
  const { mutate: getUser, isLoading: isLoading2 } = useApiMutation(api.qna.getUsersByCategory);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    getUser({ category: category })
      .then((value) => {
        console.log(value);
        setUsers(value);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [once]);

  return (
    <div className="flex p-4 border rounded-lg shadow-sm bg-white">
      {/* Left side: Category name */}
      <div className="w-1/3 flex items-center justify-center p-4 bg-blue-50 text-blue-600 font-medium text-lg rounded-l-lg">
        {category}
      </div>

      {/* Right side: User list */}
      <div className="w-2/3 p-4">
        <h2 className="text-base font-semibold text-gray-700 mb-2">Users</h2>
        {isLoading2 ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : users.length > 0 ? (
          <ul className="space-y-1">
            {users.map((user) => (
              <li
                key={user.user_id}
                className="flex justify-between items-center text-gray-800 text-sm p-2 border rounded-lg hover:bg-gray-100"
              >
                {/* Left side: User name */}
                <span>{user.name}</span>

                {/* Right side: Reputation */}
                <span className="text-gray-600 text-xs font-medium bg-gray-200 px-2 py-1 rounded-md">
                  {user.reputation}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No users found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
