import React from 'react'

export const Navbar = () => {
  return (
    <div>
        
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Főoldal</a>
        <a className="nav-link" href='/scifi'>Scifi</a>
        <a className="nav-link" href="/humor">Humor</a>
      
    </div>
  </div>
</nav>



    </div>
  )
}
