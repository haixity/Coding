import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurriculumTracks from "@/components/CurriculumTracks";
import ArchitectureLab from "@/components/ArchitectureLab";
import InteractiveRoadmaps from "@/components/InteractiveRoadmaps";
import YouTubeShowcase from "@/components/YouTubeShowcase";
import GitHubShowcase from "@/components/GitHubShowcase";
import CommunityJoin from "@/components/CommunityJoin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <CurriculumTracks />
      <ArchitectureLab />
      <InteractiveRoadmaps />
      <YouTubeShowcase />
      <GitHubShowcase />
      <CommunityJoin />
      <Footer />
    </main>
  );
}
