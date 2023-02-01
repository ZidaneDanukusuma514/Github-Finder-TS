import * as React from "react";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-3  bg-indigo-800 rounded-lg p-4">
        <div className="flex flex-col border-2">
          <img
            className="max-w-sm self-center"
            src="https://avatars.githubusercontent.com/u/56733493?v=4"
            alt=""
          />
          <h1 className="text-lg font-semibold text-white">
            Account Name: Zidane
          </h1>
        </div>
        <div className="col-span-2">
          <h2>My Repo:</h2>
        </div>
      </div>
    </div>
  );
}
