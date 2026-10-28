import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurriculumTracks from "@/components/CurriculumTracks";
import CommunityJoin from "@/components/CommunityJoin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <CurriculumTracks />
      <CommunityJoin />
      <Footer />
    </main>
  );
}
