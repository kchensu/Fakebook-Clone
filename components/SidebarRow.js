function SidebarRow({ Icon, title, style }) {
  return (
    <div
      className="flex items-center space-x-2 p-2
     hover:bg-gray-200 rounded-xl cursor-pointer
     content-center space-y-1 "
    >
      {Icon && <Icon className={style} />}
      <p className="hidden sm:inline-flex font-medium pt-6">{title}</p>
    </div>
  );
}

export default SidebarRow;
