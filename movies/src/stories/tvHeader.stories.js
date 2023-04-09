import React from "react";
import TvHeader from "../components/headerTv";
import SampleTv from "./sampleData2";

export default {
  title: "Tv Details Page/TvHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader tv={SampleTv} />;
Basic.storyName = "Default";
