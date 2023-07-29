import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "../components/Forms/AddUserForm";
import User from "../components/Users";
import Modal from "../components/ui/Modal";
import { selectUser } from "../redux/features/selectors";
import Layout from "./Layout";

export default function Users() {
  const [open, setOpen] = useState(false);

  const users = useSelector(selectUser);
  let usersView = [];

  if (users?.length > 0)
    usersView = users?.map((item) => <User data={item} key={item.id} />);

  return (
    <Layout>
      <div className="px-10 mt-6 w-52 flex items-center justify-between">
        <h1 className="text-2xl font-bold inline">Users</h1>
        <button
          onClick={() => setOpen(true)}
          className=" w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto">
        {usersView}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <AddUserForm setModalOpen={setOpen} />
      </Modal>
    </Layout>
  );
}
