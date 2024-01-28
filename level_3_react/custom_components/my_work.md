import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
    
    <header><nav>
    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"/>
   </nav> </header>
    
    <h1>My Love of React!</h1>
    <ol>
    <li>It seems cool to work with</li>
    <li>can make development quicker and less painful!</li>
    <li>i be able to make really cool apps!</li>
    </ol>
    <footer>© 2024 Menoko OG development. All rights reserved.</footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 