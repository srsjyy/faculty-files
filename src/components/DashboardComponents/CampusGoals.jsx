
import {
  School,
  Globe2,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";
import AnimateInView from "../widgets/AnimateInView"; 

export default function CampusGoals() {
  const goals = [
    {
      icon: School,
      text: "Provide quality and affordable education which promotes intellectual growth, academic excellence and moral integrity.",
    },
    {
      icon: Globe2,
      text: "Prepare students to meet the demands of the global market and respond to the society’s needs.",
    },
    {
      icon: GraduationCap,
      text: "Develop innovative and scholarly researchers who have the ability to create new understanding in quest for GAD-related quality research through inquiry, analysis and problem solving.",
    },
    {
      icon: BadgeCheck,
      text: "Produce globally competitive graduates with full competence in their fields of study.",
    },
  ];

  return (
    <section id="campus-goals" className="bg-white py-16 px-4 md:px-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <AnimateInView duration={700}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-6">
            Goals of the Campus
          </h2>
        </AnimateInView>

        <AnimateInView duration={700}>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            In support of the Vision and Mission of the University, CvSU – Bacoor
            City Campus shall:
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 gap-8">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              // This structure is now complete and correct
              <AnimateInView duration={700}>
                <div
                  className="bg-amber-100 border-l-4 border-red-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-800 text-white font-bold text-lg">
                      {idx + 1}
                    </div>
                    <Icon className="text-red-800" size={24} />
                    <h4 className="text-lg font-semibold text-red-900">
                      Goal # {idx + 1}
                    </h4>
                  </div>
                  <p className="text-gray-800 text-sm">{goal.text}</p>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}