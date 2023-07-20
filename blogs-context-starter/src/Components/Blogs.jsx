import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className=" h-screen w-11/12 max-w-[630px] py-8 flex flex-col justify-center align-center gap-y-7 mt-[65px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div>
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm">Posted on {post.date}</p>
            <p className="text-md mt-[10px]">{post.content}</p>
            <div className="mt-4 mt-10">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 underline  font-bold mx-1 text-xm"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
