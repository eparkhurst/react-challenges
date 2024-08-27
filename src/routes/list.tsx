import { createFileRoute } from '@tanstack/react-router';

import Card from '../components/Card';
import { useEffect } from 'react';
import { createSwapy } from 'swapy';

export const Route = createFileRoute('/list')({
  component: () => <List />,
});

const DEFAULT = {
  '1': 'a' as Item,
  '3': 'c' as Item,
  '4': 'd' as Item,
};

function A() {
  return (
    <div
      className="text-10 a flex h-full w-full cursor-pointer justify-center bg-green-500 p-4"
      data-swapy-item="a"
    >
      <div>Thing 1</div>
    </div>
  );
}

function C() {
  return (
    <div
      className="text-10 a c flex h-full w-full cursor-pointer justify-center bg-red-500 p-4"
      data-swapy-item="c"
    >
      <div>Thing 2</div>
    </div>
  );
}

function D() {
  return (
    <div
      className="text-10 a d flex h-full w-full cursor-pointer justify-center bg-blue-500 p-4"
      data-swapy-item="d"
    >
      <div>Thing 3</div>
    </div>
  );
}

type Item = 'a' | 'c' | 'd' | null;
function getItemById(itemId: Item) {
  switch (itemId) {
    case 'a':
      return <A />;
    case 'c':
      return <C />;
    case 'd':
      return <D />;
  }
}

const List = () => {
  const slotItems: Record<string, 'a' | 'c' | 'd' | null> = localStorage.getItem('slotItem')
    ? JSON.parse(localStorage.getItem('slotItem')!)
    : DEFAULT;

  useEffect(() => {
    const container = document.querySelector('.container')!;
    const swapy = createSwapy(container);
    swapy.onSwap(({ data }) => {
      const dataObject = data.object as Record<string, Item>;
      localStorage.setItem('slotItem', JSON.stringify(dataObject));
    });
  }, []);
  return (
    <Card title="List">
      <div className="container flex w-full max-w-[500px] flex-col gap-1 p-2">
        <div className="a flex-1" data-swapy-slot="1">
          {getItemById(slotItems['1'])}
        </div>
        <div className="b flex-1" data-swapy-slot="2">
          {getItemById(slotItems['2'])}
        </div>
        <div className="c flex-1" data-swapy-slot="3">
          {getItemById(slotItems['3'])}
        </div>
        <div className="d flex-1" data-swapy-slot="4">
          {getItemById(slotItems['4'])}
        </div>
      </div>
    </Card>
  );
};
