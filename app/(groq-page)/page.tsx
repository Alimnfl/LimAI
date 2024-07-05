import React from "react";
import HeroGroq from "./_component/hero";
import ContentAI from "./_component/content";

function page() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto py-20 gap-20">
      <HeroGroq />
      <ContentAI />
    </div>
  );
}

export default page;
