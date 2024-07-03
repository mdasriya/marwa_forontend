import React, { useState } from "react";

const MainHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = ()=>{
    console.log("click close")
    setIsOpen(false);
  }

  return (
    <>
      <div className="mt=1">
        <div class="font-sans overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 border-5 border-black-500">
            <thead class="bg-gray-100 whitespace-nowrap">
              <tr className=" bg-blue-700 text-white font-bold ">
                <td></td>
                <td></td>
                <td className="w-full m-3 p-2 flex justify-center text-center uppercase tracking-wider">
                  storage capacity
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr className="bg-gray-700">
                <th class="px-4  py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                  Tank NO
                </th>
                <th class="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                  Product
                </th>
                <th class="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                  Capacity
                </th>
                <th class="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                  No of Nozzles
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
              <tr>
                <td class="px-4 py-4 text-sm text-gray-800">1</td>
                <td class="px-4 py-4 text-sm text-gray-800">MS-1</td>
                <td class="px-4 py-4 text-sm text-gray-800">15000 L</td>
                <td class="px-4 py-4 text-sm text-gray-800">6</td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button class="text-blue-600 mr-4" onClick={openModal}>
                    Edit
                  </button>
                  <button class="text-red-600">Delete</button>
                </td>
              </tr>

              <tr>
                <td class="px-4 py-4 text-sm text-gray-800">2</td>
                <td class="px-4 py-4 text-sm text-gray-800">MS-2</td>
                <td class="px-4 py-4 text-sm text-gray-800">10000 L</td>
                <td class="px-4 py-4 text-sm text-gray-800">6</td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button class="text-blue-600 mr-4" onClick={openModal}>Edit</button>
                  <button class="text-red-600">Delete</button>
                </td>
              </tr>

              <tr>
                <td class="px-4 py-4 text-sm text-gray-800">3</td>
                <td class="px-4 py-4 text-sm text-gray-800">HSD</td>
                <td class="px-4 py-4 text-sm text-gray-800">15000 L</td>
                <td class="px-4 py-4 text-sm text-gray-800">6</td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button class="text-blue-600 mr-4" onClick={openModal}>Edit</button>
                  <button class="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



   {isOpen &&  
     <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <div class="flex items-center">
            <h3 class="text-blue-600 text-xl font-bold flex-1">
              Edit
            </h3>
            <svg onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <form class="space-y-4 mt-8">
            <div>
              <labe class="text-gray-800 text-sm mb-2 block">
                 TANK NO
              </labe>
              <input
                type="number"
                placeholder="Enter tank no"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <labe class="text-gray-800 text-sm mb-2 block">PRODUCT</labe>
              <input
                type="text"
                placeholder="Enter product "
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <labe class="text-gray-800 text-sm mb-2 block">CAPACITY(in Ltr)</labe>
              <input
                type="number"
                placeholder="Enter quantity"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <labe class="text-gray-800 text-sm mb-2 block">
                NO OF NOZZLES
              </labe>
              <input
                type="number"
                placeholder="Enter nozzles no"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

         

            <div class="flex justify-end gap-4 !mt-8">
              <button
              onClick={closeModal}
                type="button"
                class="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                class="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
     } 
     
    </>
  );
};

export default MainHome;
