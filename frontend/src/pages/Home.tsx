import { File, LucideDownload, ScanEye } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="py-32 flex flex-col container z-50">
      <section className="flex flex-col gap-y-5 items-center">
        <h1 className="text-[#333] text-5xl font-bold text-center">
          Resume Builder
        </h1>
        <p className="max-w-xl text-xl text-center text-[#333">
          Create a resume that stands out. Create a professional resume in
          minutes. Make a great first impression and get the job you want.
        </p>
        <Button label="Get Started" size="lg" />
      </section>

      <section className="py-24">
        <h2 className="text-3xl text-center text-white font-bold">
          Just Three steps
        </h2>

        <div className="grid grid-cols-3 my-9 gap-5">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="shadow-md bg-white/20 px-4 py-8 rounded-md flex flex-col items-center"
            >
              <span className="text-white mb-5">{card.icon}</span>
              <h3 className="text-lg text-white font-bold">{card.title}</h3>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

const cardsData = [
  {
    title: "Fill",
    description: "Fill out the form with your information",
    icon: <File size={30} />,
  },
  {
    title: "Preview",
    description: "Preview your resume",
    icon: <ScanEye size={30} />,
  },
  {
    title: "Download",
    description: "Download your resume",
    icon: <LucideDownload size={30} />,
  },
];
