import { Featured } from "./pageComponent/Featured";
import { FeatureSections } from "./pageComponent/FeatureSection";
import { CuratedSolutions, HighDemandProjects, ResearchInsights } from "./pageComponent/InsightsScetion";
import { HighlightedProjects, ProminentProjects } from "./pageComponent/ProjectsSection";
import { RecommendedSellers } from "./pageComponent/Recommended";
import { TopPicks } from "./pageComponent/TopPickes";


export default function BuyComponent() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureSections/>
      <TopPicks/>
      <ProminentProjects />
      <HighlightedProjects />
      <Featured />
      <HighDemandProjects />
      <ResearchInsights />
      <CuratedSolutions />
      <RecommendedSellers />
    </main>
  );
}
