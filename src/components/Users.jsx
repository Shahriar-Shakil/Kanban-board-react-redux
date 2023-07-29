/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";

import Modal from "./ui/Modal";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/features/usersSlice";

export default function User({ data }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  const menu = (
    <Menu
      items={[
        {
          key: "2",
          disabled: true,
          label: (
            <button
              type="button"
              onClick={() => handleRemoveUser(data.id)}
              className="text-red-400 flex items-center text-sm space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Remove User
            </button>
          ),
        },
      ]}
    />
  );
  return (
    <>
      <div
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        draggable="true"
      >
        <Dropdown
          overlay={menu}
          className="absolute top-0 right-0 hover:flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
          placement="bottomRight"
          autoFocus
        >
          <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </a>
        </Dropdown>
        {/* <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
        
      </button> */}
        <div className="space-y-2">
          <h2 className="text-xl text-black font-semibold">{data.name}</h2>
          <p>{data.email}</p>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        {/* <TeamMembers teamId={data?.id} /> */}
      </Modal>
    </>
  );
}
