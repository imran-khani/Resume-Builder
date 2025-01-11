import { File, LucideDownload, ScanEye } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="py-32 flex flex-col container">
      <section className="flex flex-col gap-y-5 items-center">
        <h1 className="text-indigo-500 text-5xl font-bold text-center">
          Resume Builder
        </h1>
        <p className="max-w-xl text-xl text-center text-gray-600">
          Create a resume that stands out. Create a professional resume in
          minutes. Make a great first impression and get the job you want.
        </p>
        <Button label="Get Started" size="lg" />
      </section>

      <section className="py-24">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Just Three steps
        </h2>

        <div className="grid grid-cols-3 my-5 gap-5">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="shadow-md bg-white px-4 py-8 rounded-md flex flex-col items-center"
            >
              <span className="text-indigo-500 mb-5">{card.icon}</span>
              <h3 className="text-lg text-indigo-600 font-bold">
                {card.title}
              </h3>
              <p className="">{card.description}</p>
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
