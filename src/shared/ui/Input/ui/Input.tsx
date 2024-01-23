"use client";
interface IInput {
  type?: string;
  value?: string;
  onChange?: ((value: string) => void) | undefined;
  className?: string;
  placeholder?: string;
}

const Input = ({ type, value, onChange, className, placeholder }: IInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className={`${className} p-2 text-black bg-white rounded-xl`}
      placeholder={placeholder}
    />
  );
};

export default Input;