import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-center text-blue-950">หลักสูตรที่เปิดสอน</h1>
      <hr />

    <div className="flex items-center mx-auto justify-center mt-5  ">
    <div className="grid grid-cols-4 gap-4">
        <div className="max-w-sm p-4  shadow-md w-full rounded-3xl">
          <img
            className="object-cover w-full h-50"
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBO6ruiRAkahbwqy2czCgCWgS_IfVu8Lg5xJvScFarZLQJGyogH7w_t9CaQyGkROn-S5yMOom7SINGUUNXOQp7zczd9EUPMwAUa2YWg6AjZkGek=w1920-h970"
            alt=""
          />
          <h1 className="text-1xl font-bold">Basic React Native</h1>
          <h3>ระยะเวลา (วัน):5</h3>
          <h1>ราคา 7500 บาท</h1>
        </div>


        <div className="max-w-sm p-4  shadow-md w-full rounded-3xl">
          <img
            className="object-cover w-full h-50"
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBOyLD1hDKGe8VLtKc6njb1gBxIooZVcKygjKHLU_D2bjmkUtokJuXjivVTqMknWtyrS2koubAAYCedgERSK6OMj3o0gtsYORrDJFawnt9VGYL4=w1920-h970"
            alt=""
          />
          <h1 className="text-1xl font-bold">Cross Platform with Flutter</h1>
          <h3>ระยะเวลา (วัน):3</h3>
          <h1>ราคา 6500 บาท</h1>
        </div>


        <div className="max-w-sm p-4  shadow-md w-full rounded-3xl">
          <img
            className="object-cover w-full h-50"
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBNs6W_NfBSOq2q6hVWFctKc9upPGx6I_O2aCkVI2P1VuPyQm_oXYZvg_RKLO3mz14sR84B1jzTnxiut0MgTh69Ai74lFo2fMvO22tt_GofLWNA=w1920-h970"
            alt=""
          />
          <h1 className="text-1xl font-bold">Power Bi Dashboard</h1>
          <h3>ระยะเวลา (วัน):4</h3>
          <h1>ราคา 5500 บาท</h1>
        </div>

        <div className="max-w-sm p-4  shadow-md w-full rounded-3xl">
          <img
            className="object-cover w-full h-50"
            src="https://lh3.googleusercontent.com/drive-storage/AJQWtBN_wjhP8XBUUehRfXL_Al7Vff8xMIux3AHMlr0RVIqx_zQJSjA_NXvAJ-8cW4Lk4NkAsPzNelNXtICawH5B-8rMi3o-gPLKLT6fXAllE-4_TdQ=w1920-h970"
            alt=""
          />
          <h1 className="text-1xl font-bold">Ui Design with Figma</h1>
          <h3>ระยะเวลา (วัน):4</h3>
          <h1>ราคา 5000 บาท</h1>
        </div>

      </div>
    </div>


    </Layout>
  );
};

export default About;
