// Get root HTML element
const rootHtmlElement = document.getElementById('root');

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

// Create Component without JSX
function Main(props) {

    return React.createElement(
        'main',
        {},
        React.createElement(
            'h3',
            {},
            props.title,
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix'
            ),
            React.createElement(
                'li',
                {},
                'Man of Steel'
            )
        )
    );
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

const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title='Best Movies'/>
    </div>
)

// Render content
rootReactElement.render(siteContentJSX);

