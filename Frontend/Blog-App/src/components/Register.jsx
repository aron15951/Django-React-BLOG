const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-pale-gray p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2
          className="text-3xl font-bold text-pink-color mb-6 text-center"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          Registro
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-metal"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-color focus:ring focus:ring-pink-color focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-metal"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-color focus:ring focus:ring-pink-color focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-metal"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-color focus:ring focus:ring-pink-color focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-metal"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-color focus:ring focus:ring-pink-color focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-color via-pink-color to-bubble-gum text-white px-5 py-2 rounded-lg font-bold shadow-md shadow-bubble-gum hover:opacity-90 transition-opacity duration-300"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-metal">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" className="font-medium text-pink-color hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
