/* eslint-disable react/prop-types */


const Menu = ({name,className,fun}) => {
  return (
    <div className={`w-full h-auto relative  p-1 rounded-md overflow-hidden ${className} `} onClick={fun}>
    <div className="menu  duration-200 ">
        <div className="bg-white w-full h-full p-3 relative overflow-hidden duration-300 ">
            <h4>{name}</h4>
        </div>
    </div>
</div>
  )
}

export default Menu