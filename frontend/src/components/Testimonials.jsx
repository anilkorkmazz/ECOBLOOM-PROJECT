import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {

    const testimonials = [
        {
            name: "Ayşe Yıldız",
            role: "Botanik Öğrencisi",
            rating: "4.9",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Bulunduğum şehirde yetişen bitkileri kolayca öğrenebildim. Doğayla iç içe bir deneyim yaşadım.",
        },
        {
            name: "Mehmet Demir",
            role: "Doğa Fotoğrafçısı",
            rating: "5.0",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            text: "Hava durumuna göre bitki önerileri tam isabetliydi. ChatBot çok eğlenceli ve bilgilendiriciydi.",
        },
        {
            name: "Zeynep Kara",
            role: "İç Mekan Bitkisi Meraklısı",
            rating: "4.8",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            text: "Evimdeki ışık koşullarına göre bana en uygun bitkileri önerdi. Gerçekten harika bir uygulama!",
        },
        {
            name: "Ali Korkmaz",
            role: "Ziraat Mühendisi",
            rating: "5.0",
            image: "https://randomuser.me/api/portraits/men/46.jpg",
            text: "Bitki seçimi yaparken böyle bir rehber uzun zamandır arıyordum. Sonunda buldum!",
        },
        {
            name: "Selin Öztürk",
            role: "Ev Bitkisi Koleksiyoncusu",
            rating: "4.7",
            image: "https://randomuser.me/api/portraits/women/66.jpg",
            text: "ChatBot ile konuşarak bitki tavsiyesi almak çok pratik. Görseller de oldukça açıklayıcı.",
        },
        {
            name: "Barış Aydın",
            role: "Bahçıvan",
            rating: "4.9",
            image: "https://randomuser.me/api/portraits/men/52.jpg",
            text: "Hangi ortamda hangi bitki yetişir sorusuna en hızlı yanıtı bu uygulama veriyor.",
        },
    ];



    return (
        <section className="relative isolate px-6 py-16 sm:py-24 lg:px-8">

            {/* Dekoratif Arka Plan */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30"
                />
            </div>

            {/* Başlık ve Açıklama */}
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-lg font-semibold text-indigo-600">Geri Bildirimler</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Binlerce doğa sever bize güveniyor
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
                Kullanıcılarımızın deneyimlerini incele, sen de en uygun bitkini keşfet
            </p>

            {/* Swiper Slider */}
            <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 32 },
                        768: { slidesPerView: 2, spaceBetween: 32 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                                    {/* Star Icon */}
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-base text-gray-600 leading-6 pb-8 transition-all duration-500 group-hover:text-gray-800">
                                    {testimonial.text}
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                                    <img className="rounded-full h-10 w-10 object-cover" src={testimonial.image} alt={testimonial.name} />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">{testimonial.name}</h5>
                                        <span className="text-sm leading-4 text-gray-500">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
