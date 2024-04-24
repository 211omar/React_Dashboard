import Pagination from "../UI/Pagination/Pagination";
import ProductsNav from "../products_nav/Products_nav";

const Products = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-x-auto bg-slate-50 rounded-lg">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-300">
                  <tr className="text-blue-500">
                    <th scope="col" className="px-6 py-4">
                      {" "}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Məhsul adı{" "}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Kateqoriya
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Firma
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Alış qiyməti
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Satış qiyməti
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Məhsul kodu
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Satış tarixi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Daha çox
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      1
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4  text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      2
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 ">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      3
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      4
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      5
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      6
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-10 py-4 font-medium text-blue-500">
                      7
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-600">
                      Cell
                    </td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.33333C3.9 8.33333 3 9.08333 3 10C3 10.9167 3.9 11.6667 5 11.6667C6.1 11.6667 7 10.9167 7 10C7 9.08333 6.1 8.33333 5 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 8.33333C17.9 8.33333 17 9.08333 17 10C17 10.9167 17.9 11.6667 19 11.6667C20.1 11.6667 21 10.9167 21 10C21 9.08333 20.1 8.33333 19 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 8.33333C10.9 8.33333 10 9.08333 10 10C10 10.9167 10.9 11.6667 12 11.6667C13.1 11.6667 14 10.9167 14 10C14 9.08333 13.1 8.33333 12 8.33333Z"
                          stroke="#686868"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Products;
