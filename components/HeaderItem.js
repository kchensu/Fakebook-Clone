function HeaderItem({ Icon, active }) {
  return (
    <div className="header-icon">
      <Icon
        className={`h-6 group-hover:text-blue-500
      text-center sm:h-7 mx-auto text-gray-500 ${active && "text-blue-500"}`}
      />
    </div>
  );
}

export default HeaderItem;
