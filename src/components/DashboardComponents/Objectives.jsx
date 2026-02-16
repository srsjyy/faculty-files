import {
  GraduationCap,
  Code,
  BookOpen,
  Users,
  Network,
} from "lucide-react";

import AnimateInView from "../widgets/AnimateInView";

const objectives = [
  {
    icon: GraduationCap,
    title: "Provide in-depth knowledge across fundamental areas of Information Technology and Computer Science and be successful professionals in diverse career paths.",
  },
  {
    icon: Code,
    title: "Deliver skilled graduates in designing and developing hardware and software systems of varying complexity.",
  },
  {
    icon: BookOpen,
    title: "Inculcate teaching principles in the field of technological information and application that become key factors in personal, social, and economic growth of every student.",
  },
  {
    icon: Users,
    title: "Develop technological researches applying the mathematical foundations, algorithmic principles, and theories, which contribute to the application of technical standards and interoperability.",
  },
  {
    icon: Network,
    title: "Strengthen IT linkages with government and non-government organizations.",
  },
];

export default function Objectives() {
  return (
    <section id="dept-objectives" className="bg-white py-16 px-4 md:px-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">

        <AnimateInView duration={700}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-12">
          Department Objectives
          </h2>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;

            return (
            
            <AnimateInView duration={700}>
              <div
                key={idx}
                className="bg-amber-100 border-l-4 border-red-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                    
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-800 text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  <Icon className="text-red-800" size={24} />
                   <h4 className="text-lg font-semibold text-red-900">
                    Objective # {idx + 1}
                  </h4>
                </div>
                <p className="text-gray-800 text-sm">{obj.title}</p>
              </div>
            </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
