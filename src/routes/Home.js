import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ALL_USERS_QUERY = gql`
{
  allUsers{
    _id
    email
    username
  }
}
`;

const AllUsers = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allUsers.map(({ _id, username, email }) => (
    <div key={_id}>
      <p>
        {username}: {email}
      </p>
    </div>
  ));
}

export default AllUsers;