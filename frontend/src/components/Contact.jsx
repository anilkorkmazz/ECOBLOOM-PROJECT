export default function Contact() {
    return (

        <section className="relative isolate min-h-screen flex flex-col justify-center px-6 lg:px-10 py-20 " >


            {/* Blur Arka Plan  (üst) */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30"
                />
            </div>

            <div className="max-w-7xl mx-auto ">
                {/* Get in Touch Bölümü */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10">
                    <div>
                        <h2 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Bize Ulaşın</h2>
                        <p className="mt-5 text-lg text-gray-600 leading-snug max-w-md ">

                            Projemiz hakkında bilgi almak, görüşlerinizi paylaşmak
                            ya da destek olmak için bizimle   <br />
                            iletişime geçebilirsiniz.



                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                        <div className="bg-gray-50 px-10 py-10 w-full max-w-md min-h-[130px] rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900">Anıl Korkmaz</h3>
                            <a href="21070001210@stu.yasar.edu.tr" className="text-indigo-600 mt-5 block">
                                21070001210@stu.yasar.edu.tr
                            </a>
                            <p className="text-gray-600 mt-1">+90 (534) 868-0594</p>
                        </div>
                        <div className="bg-gray-50 px-10 py-10 w-full max-w-md min-h-[130px] rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900">İbrahim Halil Özdemir</h3>
                            <a href="20070001005@stu.yasar.edu.tr" className="text-indigo-600 mt-5 block">
                                20070001005@stu.yasar.edu.tr
                            </a>
                            <p className="text-gray-600 mt-1">+90 (542) 790-8909</p>
                        </div>
                        <div className="bg-gray-50 px-10 py-10 w-full max-w-md min-h-[130px] rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900">Mustafa Eren Yurdaşan</h3>
                            <a href="20070001025@stu.yasar.edu.tr" className="text-indigo-600 mt-5 block">
                                20070001025@stu.yasar.edu.tr
                            </a>
                            <p className="text-gray-600 mt-1">+90 (552) 447-0569</p>
                        </div>

                    </div>
                </div>


                <div className="mt-15 border-t-[0.5px] border-gray-300 pt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10">
                        <div>
                            <h2 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Lokasyonlarımız</h2>
                            <p className="mt-5 text-lg text-gray-600 leading-snug max-w-md">
                                Şu anda Türkiye genelinde hizmet veriyoruz. <br />
                                Bizimle her yerden iletişime geçebilirsiniz.

                            </p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                            <div className="bg-gray-50 px-10 py-10 w-full max-w-md min-h-[130px] rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900">İzmir</h3>
                                <p className="text-gray-600 mt-5">Yaşar Üniversitesi</p>
                                <p className="text-gray-600 mt-1">Selçuk Yaşar Kampüsü, Bornova</p>
                            </div>
                            {/*
                            <div className="bg-gray-50 px-10 py-10 w-[370px] min-h-[130px] rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900">New York</h3>
                                <p className="text-gray-600 mt-5">886 Walter Street</p>
                                <p className="text-gray-600 mt-1">New York, NY 12345</p>
                            </div>
                            <div className="bg-gray-50 px-10 py-10 w-[370px] min-h-[130px] rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900">Toronto</h3>
                                <p className="text-gray-600 mt-5">7363 Cynthia Pass</p>
                                <p className="text-gray-600 mt-1">Toronto, ON N3Y 4H8</p>
                            </div>
                            <div className="bg-gray-50 px-8 py-10 w-[370px] min-h-[130px] rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900">Chicago</h3>
                                <p className="text-gray-600 mt-5">726 Mavis Island</p>
                                <p className="text-gray-600 mt-1">Chicago, IL 60601</p>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
