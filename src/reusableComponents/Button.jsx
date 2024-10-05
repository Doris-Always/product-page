const Button = ({ size, bgColor, text,color }) => {
    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      };
    return(
      <>
        <section>
            <button className={`${sizeClasses[size]} ${bgColor} ${color}  border border-black `}>
            {text}
            </button>
        </section>
      </>
    )
  }
  export default Button;