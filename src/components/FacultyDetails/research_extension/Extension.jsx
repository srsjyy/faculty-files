function Extension({ extension }) {
  return (
    <div className="w-full p-6 lg:p-8 bg-amber-200 rounded-2xl shadow font-funnel">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Extension Services and Activities
      </h2>
      <a
        href={extension.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <img
          src={extension.image}
          alt="Extension Program"
          className="w-100 h-100 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </a>
    </div>
  );
}

export default Extension;
