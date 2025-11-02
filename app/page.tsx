"use client";

import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { PathSection } from "../components/PathSection";
import { Footer } from "../components/Footer";
import { careerPaths } from "../data/careerPaths";

export default function Page() {
  return (
    <main className="container">
      <Hero />
      <Navigation />
      <div id="paths">
        {careerPaths.map((path, index) => (
          <PathSection path={path} index={index} key={path.id} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
