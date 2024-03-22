function Quienes_somos() {
  return (
    <div id="Quienes_Somos">
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4  text-center lg:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Quienes Somos
            </h1>

            <p className="mb-4 texto-xl">
              En Sim SAS, nos dedicamos a proporcionar soluciones tecnológicas
              innovadoras para optimizar y simplificar la gestión de impuestos
              municipales. Con un enfoque centrado en la eficiencia, la
              transparencia y la satisfacción del cliente, hemos establecido una
              reputación como líderes en el campo de los sistemas tributarios
              municipales.
            </p>
            <p></p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quienes_somos;
