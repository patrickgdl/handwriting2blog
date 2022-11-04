import React from "react";
import { Toaster } from "react-hot-toast";

import {
  Background,
  Features,
  FileUpload,
  Header,
  Hero,
  More,
  Why,
} from "../components/home";

const Home = () => {
  return (
    <div className="bg-white font-display">
      <Background />

      <div className="h-screen">
        <Header />

        <div className="relative flex flex-col items-center px-6 pt-24 text-center sm:pt-20 lg:px-0">
          <Hero />

          <FileUpload />
        </div>
      </div>

      <Why />

      <Features />

      <More />

      <Toaster />
    </div>
  );
};

export default Home;
