import {
  FileCode,
  Brain,
  Sigma,
  Laptop,
  FileText,
} from "lucide-react";

import AnimateInView from "../widgets/AnimateInView";

export default function ProgramEducationalObjectives() {
  const peos = [
    {
      icon: FileCode,
      text: "Acquire skills and disciplines required for designing, writing, and modifying software components, modules and applications that comprise software solutions.",
    },
    {
      icon: Brain,
      text: "Analyze complex problems and ethically demonstrate critical and logical problem solving skills to develop computer-based solutions in a collaborative environment.",
    },
    {
      icon: Sigma,
      text: "Design algorithmic software and develop new and effective algorithms for solving computing problems.",
    },
    {
      icon: Laptop,
      text: "Utilize modern computing tools in legal, social, ethical and professional manner and engage in life-long learning endeavors.",
    },
    {
      icon: FileText,
      text: "Conduct relevant technological researches in the field of Computer Science with effective communication, reports, and design documentation.",
    },
  ];

  return (
    <section id="cs-objectives" className="bg-white py-16 px-4 md:px-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">

        <AnimateInView duration={700}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-6">
        Computer Science Program Educational Objectives <br /> (based on the program CMO)
          </h2>
        </AnimateInView>

        <AnimateInView duration={700}>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            To attain the objectives of the department, the program aims to produce graduates who can:
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 gap-8">
          {peos.map((item, idx) => {
            const Icon = item.icon;
            return (
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
                    PEO {idx + 1}
                  </h4>
                </div>
                <p className="text-gray-800 text-sm">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
