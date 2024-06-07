
const Button = ({ styles }) => {
  return (
    <button
      type="button"
            className={`py-4 px-10 bg-blue-gradient font-poppins font-medium text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;