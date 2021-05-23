function SidebarRow({ Icon, title, style }) {
  return (
    <div
      className="flex items-center space-x-2 p-4
     hover:bg-gray-200 rounded-xl cursor-pointer
     content-center"
    >
      {Icon && <Icon className={style} />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
