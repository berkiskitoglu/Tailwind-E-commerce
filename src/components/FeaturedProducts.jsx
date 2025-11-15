import AddToCartButton from "./AddToCartButton";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 10 - 42 mm Rose Gold",
      image: "/img/p1.jpg",
      price: "₺12.450,00",
      discount: "%35 indirim",
      description: "Rose gold kasası ve şık sport band ile günlük kullanım ve egzersizler için ideal.",
    },
    {
      id: 2,
      name: "Apple Watch Series 10 - 44 mm Beyaz",
      image: "/img/p2.jpg",
      price: "₺13.100,00",
      discount: "%20 indirim",
      description: "Beyaz kasa ve açık renk bandıyla zarif bir görünüm ve gelişmiş sağlık takibi sunar.",
    },
    {
      id: 3,
      name: "Apple Watch Series 10 - 40 mm Siyah",
      image: "/img/p3.jpg",
      price: "₺11.800,00",
      discount: "%15 indirim",
      description: "Siyah kasa ve koyu renk bandıyla şık ve kompakt bir tasarım sunar.",
    },
    {
      id: 4,
      name: "Apple Watch Series 10 - 44 mm Siyah",
      image: "/img/p4.jpg",
      price: "₺13.500,00",
      discount: "%10 indirim",
      description: "Premium siyah kasa ve dayanıklı sport band ile tarz sahibi kullanıcılar için ideal.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[75%] px-4">
        <div className="mb-4 flex items-center justify-between md:mb-8">
          <h1 className="text-xl font-serif text-gray-900 sm:text-2xl">Öne Çıkan Ürünler</h1>
          <a href="#" className="flex items-center font-medium text-blue-700 hover:underline">
            Diğer Ürünlere Bak
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product border border-gray-200 rounded-lg bg-white p-4 shadow-sm">
              <div className="h-56 w-full">
                <a href="#">
                  <img className="mx-auto h-full" src={product.image} alt={product.name} />
                </a>
              </div>
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">{product.discount}</span>
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </button>
                </div>

                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                  {product.name}
                </a>
                <p className="mt-2 text-gray-500 text-sm">{product.description}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900">{product.price}</p>
                  <AddToCartButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
