const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      classNameName={`inline-flex items-center text-base ${containerStyles}`}
    >
      {title}

      {iconRight && <div classNameName="ml-2">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
