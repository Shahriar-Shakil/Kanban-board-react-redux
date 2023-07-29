import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "./Layout";
import ProjectGrid from "../components/Project/ProjectGrid";
import Filtering from "../components/Project/Filtering";

export default function Projects() {
  return (
    <Layout>
      <div className="px-10 mt-6 gap-4 flex flex-col sm:flex-row justify-between">
        <h1 className="text-2xl font-bold">Project Board</h1>
        <Filtering />
      </div>
      <DndProvider backend={HTML5Backend}>
        <ProjectGrid />
      </DndProvider>
    </Layout>
  );
}
