import { useGetUsersQuery } from "./utils/__generated__/graphql";
import React from "react";

export function Users() {
  const { data, loading, error } = useGetUsersQuery();

  if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    console.log(data);
  }
  return <div>users</div>;
}
