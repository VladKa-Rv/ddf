import React from "react";

const Header = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.svg/864px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.svg.png"
              class="h-10 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              УКВ
            </span>
          </a>
          <div class="flex items-center">
            <a class="mr-6 text-sm  text-blue-600 dark:text-blue-500 hover:underline">
              + 0362 63-46-12
            </a>
            <a class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
              33028 м. Рівне, вул. Соборна, 12 а
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Юристи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Бугалтерія
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Оренда
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Приватизація
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
