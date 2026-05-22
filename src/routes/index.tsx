import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadhithyan R — AI & Cybersecurity Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aadhithyan R, a Computer Science Engineering student crafting AI systems, cybersecurity tools, and cinematic digital experiences.",
      },
      { property: "og:title", content: "Aadhithyan R — AI & Cybersecurity Developer" },
      {
        property: "og:description",
        content: "AI systems, cybersecurity, and cinematic software by a CSE student from Kerala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Portfolio />
    </>
  );
}
