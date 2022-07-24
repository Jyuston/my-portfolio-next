const LinkedInIcon: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-slate-200 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className=" transform fill-slate-200 text-opacity-50 transition duration-200 hover:cursor-pointer "
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        />
      </svg>
      LinkedIn
    </div>
  );
};

export default LinkedInIcon;
