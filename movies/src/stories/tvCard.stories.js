import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData2";

export default {
  name: "Home Page/TvCard",
  component: TvCard,
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
