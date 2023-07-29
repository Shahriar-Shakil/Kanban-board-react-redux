/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { DatePicker, Select } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProject, editProject } from "../../redux/features/projectSlice";
import { selectUser } from "../../redux/features/selectors";
import dayjs from "dayjs";

export default function AddProjectForm({ project, title, setModalOpen }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  // if works when edit existing Project
  useEffect(() => {
    if (project) {
      reset(project);
      setValue("assign", project?.assign.id);
    }
  }, [project, reset, setValue]);

  const onSubmit = (data) => {
    const params = {
      ...data,
      assign: users.find((user) => user.id === data.assign),
      stage: title?.toLowerCase(),
    };

    if (project?.id) {
      // edit
      dispatch(
        editProject({
          id: project.id, // The project ID you want to update
          updates: {
            ...params,
          },
        })
      );
    } else {
      // add new
      dispatch(addProject(params));
    }

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
                    defaultValue={dayjs(field.value)} // DatePicker accepts a moment object
                    style={{
                      width: "100%",
                    }}
                    onChange={(_, dateString) => {
                      field.onChange(dateString); // No need of a state
                    }}
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
