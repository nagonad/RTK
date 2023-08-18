import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers, deleteUser } from "./userSlice";

const UserView = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {user.loading && <div>Loading..</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length
        ? user.users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <button
                onClick={() => {
                  dispatch(deleteUser(user.id));
                }}
              >
                delete
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default UserView;
