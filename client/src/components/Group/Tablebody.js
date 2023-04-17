import React from 'react';
import { Link } from 'react-router-dom';

function Tablebody({ g_id, g_name, genre, t_members }) {
  return (
    <>
      <tr className="border-b-2 border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">{g_id}</td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-200 text-yellow-800 rounded-full h-8 w-8 flex items-center justify-center font-bold">
              {g_name.substring(0, 1)}
            </div>
            <span>{g_name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">{genre}</td>
        <td className="py-3 px-6 text-left">{t_members}</td>
        <td className="py-3 px-6 text-center">
          <Link to={`/group/${g_id}/room`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Join
          </Link>
        </td>
      </tr>
    </>
  );
}

export default Tablebody;
