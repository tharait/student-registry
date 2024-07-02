import React from "react";

export default function StudentLayout({ children }) {
  return (
    <>
      <header>Students</header>
      <main>{children}</main>
    </>
  );
}
