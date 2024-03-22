const Servicio = () => {
  return (
    <div id="Servicios" className="p-8 xl:p-20 bg-sky-100	">
      <div className="mb-8">
        <h1 className="text-[40px] font-black text-center ">
          Creamos productos digitales de alta calidad{" "}
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Le ayudamos a identificar, explorar y responder a nuevas
          oportunidades.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full  h-30 object-cover rounded-3xl"
          />
          <h3 className="text-2xl font-bold">Diseño de aplicaciones</h3>
          <p className="text-gray-500">
            Nos especializamos en la creación de páginas de marketing hermosas y
            de alta calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="https://www.epitech-it.es/wp-content/uploads/2023/03/Shell-editado.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500"> App</p>
            <h3 className="text-2xl font-bold">Desarrollo web.</h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App</p>
            <h3 className="text-2xl font-bold">Desarrollo de aplicaciones</h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App</p>
            <h3 className="text-2xl font-bold">Comercio electrónico</h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="https://webtecksolutions.com/img/fotos/devices-mockup-1.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <h3 className="text-2xl font-bold">
              Gestión de contenidos personalizados
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
