/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
// import AddProjectForm from "../Forms/AddProjectForm";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../redux/features/projectSlice";
import { selectFilter } from "../../redux/features/selectors";
import AddProjectForm from "../Forms/AddProjectForm";
import Modal from "../ui/Modal";
import Project from "./Project";

export default function ProjectList({ title, projects = [] }) {
  const [open, setOpen] = useState(false);
  const assignedTo = useSelector(selectFilter).assignedTo;

  const filteredProjects = projects.filter((project) => {
    if (assignedTo) {
      return project.assign.id === assignedTo;
    } else return project;
  });
  const dispatch = useDispatch();
  const handleDrop = (item) => {
    if (item?.stage.toLowerCase() !== title.toLowerCase()) {
      dispatch(
        editProject({
          id: item.id, // The project ID you want to update
          updates: {
            stage: title.toLowerCase(),
          },
        })
      );
    }
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <>
      <div
        ref={drop}
        style={{ border: isOver ? "1px dashed #999" : "1px solid transparent" }}
        className="flex flex-col flex-shrink-0 w-72"
      >
        <div className="flex items-center flex-shrink-0 h-10 px-2">
          <span className="block text-sm font-semibold capitalize">
            {title}
          </span>
          {filteredProjects?.length > 0 ? (
            <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
              {filteredProjects?.length}
            </span>
          ) : (
            <></>
          )}
          {/* */}

          <button
            onClick={() => setOpen(true)}
            type="button"
            className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
          >
            <svg
              className="w-5 h-5"
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
        <div className="flex flex-col pb-2 overflow-auto">
          {filteredProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <AddProjectForm title={title} setModalOpen={setOpen} />
      </Modal>
    </>
  );
}
