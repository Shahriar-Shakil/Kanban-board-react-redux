/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/features/selectors";
import { DatePicker } from "antd";
import moment from "moment";
import { addProject } from "../../redux/features/projectSlice";

export default function AddProjectForm({ setModalOpen }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  // useEffect(() => {
  //     if (isSuccess) {
  //         setModalOpen(false);
  //     }
  // }, [isSuccess, isError, setModalOpen]);
  const onChangeTeams = (value) => {
    // setTeamId(value);
  };
  const onSubmit = (data) => {
    const params = {
      ...data,
      assign: users.find((user) => user.id === data.assign),
      stage: "todo",
    };
    dispatch(addProject(params));
    setModalOpen(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-2">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add New Project
          </h3>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                type="text"
                {...register("title", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <input
                id="description"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                type="text"
                {...register("description", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <div className="mt-1">
              <Controller
                control={control}
                name="dueDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    onChange={(_, dateString) => {
                      field.onChange(dateString); // No need of a state
                    }}
                    disabledDate={(current) =>
                      current && current < moment().endOf("day")
                    }
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Assign to
            </label>
            <div className="mt-1">
              <Controller
                control={control}
                name="assign"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    {...field}
                    defaultValue={field.defaultValue}
                  >
                    {users?.map((foo) => (
                      <Select.Option value={foo.id} key={foo.id}>
                        {foo.name}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="ml-auto block justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
}
