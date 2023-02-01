import * as React from "react";

export interface IHeaderProps {}
export default function Header(props: IHeaderProps) {
  return (
    <header className="bg-indigo-900 py-4">
      <h1 className="text-2xl text-white uppercase text-center font-sans font-bold">
        github finder
      </h1>
    </header>
  );
}
