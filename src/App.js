import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postId: null,
            titleId: ``,

        };
    }

    componentDidMount() {

        let postNumber = Number(prompt(`input the number of post`));

        let link = `https://jsonplaceholder.typicode.com/todos/` + JSON.parse(postNumber)
        console.log(link)
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log({ data })
                this.setState({ data })

                this.setState({ titleId: data.title, postId: data.id });
            })
}

 render() {
        const { titleId, postId } = this.state;

return (
            <div className="card text-center m-3">
                <h5 className="card-header">posts</h5>
                <ul>

        <li key={postId} >
                        {titleId}
                       
                        <button>delete</button>
                        <button>edit</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;; 
 
