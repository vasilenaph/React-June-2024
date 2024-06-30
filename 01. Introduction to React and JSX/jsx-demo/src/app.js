// Get root HTML element
const rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Inititalize root react element 
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element 
const headingReactSectionElement = (
    <header className="navigation" id="site-header">
    <h1>Hello JSX from React!</h1>
    <h2>JSX is awesome!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?re</p>
    </header>
);

// Render content
rootReactElement.render(headingReactSectionElement);

