// Get root HTML element
var rootHtmlElement = document.getElementById('root');

// Inititalize root react element 
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element 
var headingReactSectionElement = React.createElement(
    "header",
    { className: "navigation", id: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React!"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome!"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?re"
    )
);

// Create Component without JSX
function Main(props) {

    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

// const siteContent = React.createElement(
//     'div',
//     {},
//     headingReactSectionElement,
//     React.createElement(
//         Main,
//         {title: 'Best Movies'}
//     )
// );

var siteContentJSX = React.createElement(
    "div",
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: "Best Movies" })
);

// Render content
rootReactElement.render(siteContentJSX);