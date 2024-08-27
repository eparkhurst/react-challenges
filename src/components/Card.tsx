import { ReactElement } from 'react';

const Card = ({ children, title }: { children: ReactElement; title: string }) => {
  return (
    <div className="items center flex h-fit w-[400px] flex-col justify-center rounded bg-white p-4 shadow">
      <h1 className="py-4 text-center text-3xl">{title}</h1>
      {children}
    </div>
  );
};

export default Card;
