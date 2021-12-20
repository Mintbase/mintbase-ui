const MbTable = ({
  name,
  headers,
  data,
}: {
  name: string;
  headers: string[];
  data: any[];
}) => {
  return (
    <section className="bg-white dark:bg-gray-850">
      <header className="p-24 border-b border-gray-200 dark:border-gray-800 dark:text-white p-big-130">
        {name}
      </header>
      <table className="w-full">
        <thead className="table-fixed border-b-2 border-gray-200 text-left dark:border-gray-900 text-gray-700 dark:text-gray-300">
          <tr>
            {headers.map((header) => (
              <th className="pl-24 p-16 p-med-90">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elm, i) => {
              return (
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  {Object.values(elm).map((val: any) => {
                    return (
                      <td className="p-24 dark:text-white p-med-90">{val}</td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default MbTable;
