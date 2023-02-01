import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex flex-col space-y-12">
      <div className="container mx-auto ">
        <div className="p-4 bg-indigo-200 rounded-lg"></div>
      </div>
    </div>
  );
}
