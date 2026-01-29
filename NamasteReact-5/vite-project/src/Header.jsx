const Header = () => {
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

// Named Export
export const Title = () => {
  return (
    <div className="title">
      <img
        className="logo"
        src="https://tse2.mm.bing.net/th/id/OIP.5CSpVjV_VyICmJC1qptK2gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Logo"
      />
      <p className="HotelName">Food Villa</p>
    </div>
  );
};

// Defualt Export
export default Header;