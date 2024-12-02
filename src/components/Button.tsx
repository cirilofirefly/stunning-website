
type ButtonProps = {
    title: string, 
    id?: string,
    rightIcon?: any,
    leftIcon?: any,
    containerClass: string,
}

const Button = ({ id, title, rightIcon, leftIcon, containerClass}: ButtonProps) => {
  return (
    <button 
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
        id={id}
    >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div>{title}</div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button