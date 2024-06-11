import React from "react";
import { Outlet } from "react-router-dom";
import StudentList from "./components/StudentList";

export default function StudentsLayout() {
  return (
    <>
      <div>Students Page</div>
      <div className="w-full">
        <div className="flex">
          <div className="w-96 grow-0 bg-gray-100">
            <StudentList />
          </div>
          <div className="grow-1 px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
