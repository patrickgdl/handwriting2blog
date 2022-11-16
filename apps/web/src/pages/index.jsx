import React from "react";
import { Toaster } from "react-hot-toast";

import {
  Background,
  Features,
  FileUpload,
  Hero,
  More,
  Why,
} from "../components/home";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-white font-display">
        <Background />

        <div className="h-screen">
          <div className="flex h-[calc(100%_-_120px)] flex-col items-center justify-center text-center">
            <Hero />

            <FileUpload />
          </div>
        </div>

        <Why />

        <Features />

        <More />

        <Toaster />
      </div>
    </Layout>
  );
};

export default Home;
