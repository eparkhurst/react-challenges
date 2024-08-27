import { useState } from 'react';

export type AccordianOptions = {
  id: number;
  title: string;
  content: string;
};

const Accordian = ({ accordianOptions }: { accordianOptions: AccordianOptions[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="min-w-[300px] bg-white">
      {accordianOptions.map((option, i) => {
        return (
          <div key={option.id}>
            <h3
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer border-b border-black bg-gray-200 p-2 text-xl"
            >
              {option.title}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in ${
                activeIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="min-h-20 p-2">{option.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
