export default function Header() {
  return (
    <header className="bg-white py-8 md:py-16">
      <div className="max-w-[75%] mx-auto px-4 pb-4 lg:pb-10 grid grid-cols-1 md:grid-cols-12">
        <div className="content-center md:col-span-7">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
            Sınırlı Süreli Teklif! <br />
            %50’ye Varan İndirim!
          </h1>
          <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">Acele edin - Stoklar sınırlı, fiyatlar kaçmaz!</p>
        </div>
        <div className="md:col-span-5 hidden md:flex mt-0">
          <img src="/img/shopping-list.svg" alt="Alışveriş Listesi" />
        </div>
      </div>
    </header>
  );
}
