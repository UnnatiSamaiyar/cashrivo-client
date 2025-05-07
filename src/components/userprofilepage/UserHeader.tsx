/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  userId: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  address?: string;
  rivoPoints?: number;
  createdAt?: string;
}

const UserHeader = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const storedUser = localStorage.getItem('cashrivo_user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      console.log("User data from storage:", parsed.user); // 🔍 Debug
      setUser(parsed.user);
      setFormData(parsed.user);
    }
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await axios.put(
        `${backendUrl}/api/auth/users/${user._id}`,
        formData
      );

      const updatedUser = res.data.user;
      const stored = localStorage.getItem('cashrivo_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        localStorage.setItem(
          'cashrivo_user',
          JSON.stringify({ token: parsed.token, user: updatedUser })
        );
      }

      setUser(updatedUser);
      setEditMode(false);
      setSuccess('Profile updated successfully!');
    } catch (err: any) {
      alert(err.response?.data?.msg || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : 'N/A';

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow space-y-5">
      <div className="flex items-center space-x-4">
        <img
          src={formData.avatar || '/default-avatar.png'}
          alt="Avatar"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          {editMode ? (
            <input
              name="avatar"
              value={formData.avatar || ''}
              onChange={handleChange}
              placeholder="Avatar URL"
              className="text-sm border px-2 py-1 rounded w-full"
            />
          ) : (
            <>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </>
          )}
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        {editMode ? (
          <>
            <div>
              <label>Name:</label>
              <input
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded mt-1"
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded mt-1"
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded mt-1"
              />
            </div>
            <div>
              <label>Rivo Points:</label>
              <input
                type="number"
                name="rivoPoints"
                value={formData.rivoPoints || 0}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded mt-1"
              />
            </div>
          </>
        ) : (
          <>
            <p><strong>Joined:</strong> {joinedDate}</p>
            <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
            <p><strong>Address:</strong> {user.address || 'N/A'}</p>
            <p><strong>Rivo Points:</strong> {user.rivoPoints || 0}</p>
          </>
        )}
      </div>

      {editMode ? (
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            className="text-sm text-gray-500 underline"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
          onClick={() => setEditMode(true)}
        >
          Edit Profile
        </button>
      )}

      {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
    </div>
  );
};

export default UserHeader;
