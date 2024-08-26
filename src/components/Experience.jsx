import { ExperienceBox, ExperienceBox1 } from "./ExperienceBox";

export const Experience = () => {
  return (
    <div
      className="bg-[var(--background-color-two)]  w-full experience"
      id="experience"
    >
      <div className="py-24 max-w-[1280px] m-auto ">
        <div className="px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <button className="tag">Experience</button>
            </div>
            <div className="flex justify-center">
              <p className="subheading">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <ExperienceBox
              title={"Sr. Frontend Developer"}
              text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text2={"Ut pretium arcu et massa semper, id fringilla leo semper."}
              text3={"Sed quis justo ac magna."}
              text4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"Nov 2021 - Present"}
            />
          </div>
          <div className="flex justify-center">
            <ExperienceBox
              title={"Team Lead"}
              text1={"Sed quis justo ac magna."}
              text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text3={"Sed quis justo ac magna."}
              text4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              date={"Jul 2017 - Oct 2021"}
            />
          </div>
          <div className="flex justify-center">
            <ExperienceBox1
              title={"Sr. Frontend Developer"}
              text1={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              date={"Dec 2015 - May 2017"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
