import { UpworkIcon } from "./svg/UpworkIcon";

export const ExperienceBox = ({ title, text1, text2, text3, text4, date }) => {
  return (
    <div className="p-8 rounded-xl w-full max-w-[896px] shadow-md experience-box bg-[var(--experience-box)]">
      <div className="flex gap-12">
        <div className="min-w-[204px]">
          <UpworkIcon />
        </div>
        <div className="flex col">
          <div className="flex flex-col gap-4 max-w-[384px]">
            <p className="title">{title}</p>
            <ul className="list-disc ml-5 flex flex-col gap-1">
              <li className="content">{text1}</li>
              <li className="content">{text2}</li>
              <li className="content">{text3}</li>
              <li className="content">{text4}</li>
            </ul>
          </div>
          <div>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceBox1 = ({ title, text1, date }) => {
  return (
    <div className="p-8 rounded-xl max-w-[896px] w-full shadow-md experience-box bg-[var(--experience-box)]">
      <div className="flex gap-12">
        <div className="min-w-[191px]">
          <UpworkIcon />
        </div>
        <div className="flex col">
          <div className="flex flex-col gap-4 max-w-[384px]">
            <p className="title">{title}</p>
            <ul className="list-disc ml-5">
              <li className="content">{text1}</li>
            </ul>
          </div>
          <div>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
