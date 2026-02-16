import Research from "./research_extension/Research";
import Extension from "./research_extension/Extension";

function ResearchAndExtension({ research, extension }) {
  const hasResearch = Boolean(research);
  const hasExtension = Boolean(extension);
  const count = [hasResearch, hasExtension].filter(Boolean).length;

  return (
    <div
      className={`w-full gap-6 ${
        count === 2 ? "grid md:grid-cols-2" : "flex justify-center"
      }`}
    >
      {hasResearch && <Research research={research} />}
      {hasExtension && <Extension extension={extension} />}
    </div>
  );
}

export default ResearchAndExtension;
