import axios from "axios";
import * as React from "react";
export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const [user, setUser] = React.useState<any>();
  const [repos, setRepos] = React.useState<any>([]);
  const handleData = async () => {
    await axios
      .get("https://api.github.com/users/ZidaneDanukusuma514")
      .then((respon) => {
        setUser(respon.data);
      });
    await axios
      .get("https://api.github.com/users/ZidaneDanukusuma514/repos")
      .then((respon) => {
        setRepos(respon.data);
      });
  };

  React.useEffect(() => {
    handleData();
  }, []);

  console.log(repos);
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-3 gap-x-2 bg-indigo-800 rounded-lg p-4">
        <div className="flex flex-col border-2">
          <img
            className="max-w-sm self-center"
            src={!user ? null : user.avatar_url}
            alt=""
          />
          <h1 className="text-lg font-semibold text-white">
            Account Name: {!user ? null : user.login}
          </h1>
        </div>
        <div className="col-span-2">
          <h2 className="text-white text-lg font-bold">My Repo:</h2>
          <div className="grid grid-cols-4 gap-2 content-center ">
            {!repos ? (
              <p>No data send</p>
            ) : (
              repos.map((item: any, index: number): any => (
                <div
                  className="flex flex-col p-2 text-white bg-indigo-400 space-y-2"
                  key={index}
                >
                  <h1 className="text-white font-semibold">{item.name}</h1>
                  <p className=" text-black">
                    {item.description ? item.description : "No Desc"}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
