export default {
  title: "Core/Spacing",
};

export const Spacing = () => (
  <>
    <p className="heading-bold mb-8">Spacing</p>
    <p className="med-p mb-24">use class name to space elements.</p>
    <div className="flex flex-col mt-8">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead className="sub-p-bold">
            <tr>
              <th className="px-12 py-12 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                Class Name
              </th>
              <th className="px-12 py-12 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                Size
              </th>
              <th className="px-12 py-12 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                Size
              </th>
            </tr>
          </thead>

          <tbody className="bg-white big-p">
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-4
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                4px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-1 bg-mb-blackblue h-1"></div>
              </td>
            </tr>
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-8
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                8px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-2 bg-mb-blackblue h-2"></div>
              </td>
            </tr>
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-12
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                12px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-3 bg-mb-blackblue h-3"></div>
              </td>
            </tr>
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-24
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                24px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-6 bg-mb-blackblue h-6"></div>
              </td>
            </tr>
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-48
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                48px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-12 bg-mb-blackblue h-12"></div>
              </td>
            </tr>
            <tr>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                *-64
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                64px
              </td>
              <td className="px-12 py-24 whitespace-no-wrap border-b border-gray-200">
                <div className="w-16 bg-mb-blackblue h-16"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p className="med-p mt-12">
      *space-x, p or m and all derivates from this classes.{" "}
      <a
        className="text-blue-100-35 hover:text-blue-300"
        href="https://tailwindcss.com/docs/padding"
        target="_blank"
      >
        example
      </a>
    </p>
  </>
);
