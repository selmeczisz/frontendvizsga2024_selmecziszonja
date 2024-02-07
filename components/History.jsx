import React from 'react'
import './History.css'

export const History = () => {

 
  return (
    <div>

      <h1>Az antikvárium története</h1>
      <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.
      </p>
      <p>A jelenlegi épület 2019-ben lett felújítva.
      </p>
      <h2>Hírességek, akik itt jártak
      </h2>

<div className='cards'>
<div className="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Ady Endre</h5>
    <p class="card-text">Többször is kikölcsönözte Deák Ferenc műveit</p>
    <a href='https://hu.wikipedia.org/wiki/Ady_Endre' class="card-link">Wikipédia</a>
    </div>
    </div>

    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Móra Ferenc</h5>
    <p class="card-text">Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
    <a href='https://hu.wikipedia.org/wiki/Móra_Ferenc' class="card-link">Wikipédia</a>
    </div>
    </div>

    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Névtelen adományozó</h5>
    <p class="card-text">1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
    </div>
    </div>
</div>
      

      <h2>Új híresség jelzése </h2>

<form action="" className='form-control' >
  <div>
  <label htmlFor="url">Wikipédia link</label>
  <input type="url" name="url" id="url" className='form-control' />
  </div>

  <div>
    <label htmlFor="text">Leírás</label>
    <textarea name="text" id="text" cols="30" rows="10" className='form-control'
    ></textarea>
  </div>

  <button className='btn btn-primary'> Elküld</button>
</form>
      

    </div>
  )
}
