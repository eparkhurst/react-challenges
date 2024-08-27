import { createFileRoute } from '@tanstack/react-router';
import Accordian, { AccordianOptions } from '../components/Accodian';
import Card from '../components/Card';

export const Route = createFileRoute('/accordian')({
  component: () => <AccordianPage />,
});

const AccordianPage = () => {
  const accordianOptions: AccordianOptions[] = [
    {
      id: 1,
      title: 'First Accordian',
      content: 'This is the',
    },
    {
      id: 2,
      title: 'Second Accordian',
      content: 'This is the second',
    },
    {
      id: 3,
      title: 'Third Accordian',
      content: 'This is the third',
    },
  ];

  return (
    <Card title="Accordian">
      <Accordian accordianOptions={accordianOptions} />
    </Card>
  );
};
