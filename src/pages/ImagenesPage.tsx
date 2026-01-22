import imagenLocal from "../assets/24935.jpg";
import { BtnVolver } from "../components/ui/BtnVolver";

export const ImagenesPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 gap-10">
      <BtnVolver />
      <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>

      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold ">Imagenes Locales Importadas</h2>
        <img src={imagenLocal} alt="avatar local" />
      </section>

      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold ">
          Imagenes desde una URL externa
        </h2>
        <img
          src="https://www.throwup.it/wp-content-throwup/uploads/2020/01/roc-marciano-underground-godfather-scaled.jpg"
          alt="avatar Externo"
        />
      </section>

      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold ">Imagenes background</h2>
        <div
          className="h-64 bg-cover bg-center rounded-2xl flex items-center justify-center "
          style={{
            backgroundImage:
              "url(https://cdn.themedizine.com/2024/12/roc-marciano-alchemist-the-medizine.jpg)",
          }}
        >
          <span
            className="bg-black/60 px-4 py-2 rounded-2xl text-white cursor-pointer"
            onClick={() => {
              alert("Diste clic jejeje");
            }}
          >
            Fondo con texto encima
          </span>
        </div>
      </section>

      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold ">Imagenes Lazy loading</h2>
        <img
          src="https://www.throwup.it/wp-content-throwup/uploads/2020/01/roc-marciano-underground-godfather-scaled.jpg"
          alt="avatar Externo con carga"
          loading="lazy"
        />
      </section>
    </main>
  );
};
