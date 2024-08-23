const Button = ({ text }) => {
  return (
    <div>
      <button className="px-4 py-1.5 mx-2 bg-gray-300 rounded-lg font-semibold hover:bg-slate-300">
        {text}
      </button>
    </div>
  );
};
export default Button;
