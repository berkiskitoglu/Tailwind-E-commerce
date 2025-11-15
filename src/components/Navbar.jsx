export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-7xl lg:max-w-[98%] px-4 mx-auto py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div>
              <a href="#" className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                  <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z" />
                </svg>
                <span>E-Ticaret</span>
              </a>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-4 md:gap-6 py-3 sm:justify-center">
              <li>
                <a href="#" className="block text-sm font-medium text-gray-900 hover:text-red-500">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm font-medium text-gray-900 hover:text-red-500">
                  En Çok Satanlar
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm font-medium text-gray-900 hover:text-red-500">
                  İndirimler
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <button className="flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
              </svg>
              <span className="hidden sm:flex ml-1">Sepetim</span>
            </button>

            <button className="flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900" data-dropdown-toggle="userDropdown">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
              <span className="hidden sm:flex ml-1">Hesabım</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </button>

            <div id="userDropdown" className="hidden w-56 bg-white z-10 overflow-hidden overflow-y-auto rounded-lg shadow-lg">
              <ul className="p-2 text-start text-sm font-medium text-gray-900">
                <li>
                  <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    Hesabım
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    Siparişlerim
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    Ayarlar
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobil menü butonu */}
            <button className="inline-flex lg:hidden p-2 hover:bg-gray-100 text-sm font-medium text-gray-900" data-collapse-toggle="navbar-menu">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
        </div>

        <div id="navbar-menu" className="bg-gray-50 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
          <ul className="text-gray-900 text-sm font-medium space-y-3">
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">En Çok Satanlar</a>
            </li>
            <li>
              <a href="#">İndirimler</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
