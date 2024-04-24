import styles from "./_selltable.module.scss";


const Selltable = () => {
  return (
    <div className={`${styles.selltable}`}>
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-x-auto bg-slate-50 rounded-lg">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-300">
                  <tr className="text-blue-500">
                    <th scope="col" className="px-6 py-4">
                      Məhsul adı{" "}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Kateqoriya
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Miqdar
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Satış qiyməti
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Silmək
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-300">
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-green-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4 text-yellow-500">Cell</td>
                    <td className="whitespace-nowrap px-10 py-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.08325 4.14166L7.26659 3.05C7.39992 2.25833 7.49992 1.66666 8.90825 1.66666H11.0916C12.4999 1.66666 12.6083 2.29166 12.7333 3.05833L12.9166 4.14166"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.7084 7.61667L15.1667 16.0083C15.0751 17.3167 15.0001 18.3333 12.6751 18.3333H7.32508C5.00008 18.3333 4.92508 17.3167 4.83341 16.0083L4.29175 7.61667"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.91675 10.4167H12.0834"
                          stroke="#3C3C3C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
    </div>
  );
};

export default Selltable;
