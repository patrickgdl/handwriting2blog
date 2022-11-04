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

        <div className="flex h-[calc(100%_-_80px)] flex-col items-center justify-center text-center">
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
