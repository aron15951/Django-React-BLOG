const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="py-8 px-10 bg-pale-gray rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-pink-color mb-6">
          Iniciar Sesión
        </h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-metal mb-2">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              required
              className="border border-gray-300 rounded-md p-2 focus:border-pink-color focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-metal mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="border border-gray-300 rounded-md p-2 focus:border-pink-color focus:outline-none"
            />
          </div>
          <button
            className="bg-gradient-to-r from-pink-color via-pink-color to-bubble-gum text-white px-5 py-3 rounded-lg font-bold shadow-md shadow-bubble-gum hover:opacity-90 transition-opacity duration-300"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-metal">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="font-medium text-pink-color hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
