import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-center text-blue-950">หน้าหลัก</h1>
      <hr />

      <h1 className="mt-10 font-bold text-xl"></h1>
      <div className="flex justify-center">
        {" "}
        <img
          className="w-1/2 rounded-3xl shadow"
          src="https://www.britishcouncil.or.th/sites/default/files/0156_resize.jpg"
        />
      </div>
    </Layout>
  );
};

export default Home;
