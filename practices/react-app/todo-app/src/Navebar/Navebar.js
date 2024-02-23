import './Navebar.css';
function Navebar() {
  return (
    <div>
      <div className="nav-background">
        <div className="nav-container">
          <header id='header'>
            <h1 id='logo'><a href='#' className="logo">I Am NavBar Section</a></h1>
          </header>

          <nav>
            <ul className ="nav-ul">
              <li><a className="nav-link active-link" href='#'>Home</a></li>
              <li><a className="nav-link" href='#'>News</a></li>
              <li><a className="nav-link" href='#'>Contact</a></li>
              <li><a className="nav-link" href='#'>About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navebar