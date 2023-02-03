import axios from "axios";
import * as React from "react";
export interface IAboutProps {}
import loading from "../../assets/loading.gif";
export default function About(props: IAboutProps) {
  const [user, setUser] = React.useState<any>(null);
  const [repos, setRepos] = React.useState<any>(null);

  const Github = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
      Authorization: `token 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`,
    },
  });

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
            src={!user ? loading : user.avatar_url}
            alt=""
          />

          <h1 className="text-lg font-semibold text-white">
            Account Name: {!user ? null : user.login}
          </h1>
        </div>
        <div className="col-span-2">
          <h2 className="text-white text-lg font-bold ">My Repos:</h2>
          <div className="grid grid-cols-4 gap-2 mt-6 content-center ">
            {!repos ? (
              <img src={loading} className="mx-auto" alt="" />
            ) : (
              repos.map((item: any, index: number): any => (
                <div
                  className="flex flex-col p-2 text-white bg-indigo-400 space-y-2"
                  key={index}
                >
                  <a href={item.html_url}>
                    <h1 className="text-white font-semibold">{item.name}</h1>
                    <p className=" text-black">
                      {item.description ? item.description : "No Desc"}
                    </p>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
