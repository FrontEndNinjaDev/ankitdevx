import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import BlogPage from "./blog/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#0a0a2a,#050510)] text-white">

      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-32"
      >
        <Hero />
        <AboutPage/>
        <ProjectsPage/>
        <BlogPage/>
        <ContactPage/>
      </section>
    </main>
  );
}
