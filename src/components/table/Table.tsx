import React from "react";
import "./table.css";
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const MbHead = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <thead className="headers table-fixed border-b-2 border-gray-200 text-left dark:border-gray-900 text-gray-700 dark:text-gray-300 p-med-90">
      {props.children}
    </thead>
  );
};

export const MbBody = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <tbody className="p-24 dark:text-white p-med-90 body-table">
      {props.children}
    </tbody>
  );
};

const MbTable = (props: TableProps) => {
  const { title, children } = props;

  const allChildren = React.Children.map(children, (child: any) => child);
  const headers = allChildren?.filter((child) => child.type.name === "MbHead");
  const body = allChildren?.filter((child) => child.type.name === "MbBody");

  return (
    <section className="bg-white dark:bg-gray-850">
      <header className="p-24 border-b border-gray-200 dark:border-gray-800 dark:text-white p-big-130">
        {title}
      </header>
      <table className="w-full">
        {headers}
        {body}
      </table>
    </section>
  );
};

export default MbTable;
