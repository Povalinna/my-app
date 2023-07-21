<<<<<<< HEAD
import React, { Component } from 'react';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id:``,
         userid:``,
         title:``,
         posts:[],
         body:``,
         data:[],
         
      };
   }
  
   handleSubmit = (e) => {
      e.preventDefault();
   }
 handleChange=(event)=>{
     
     this.setState({value:event.target.value});
      const id = event.target.value;
      let link = "https://jsonplaceholder.typicode.com/posts?_limit="+ JSON.parse(id);
    // let link="https://jsonplaceholder.typicode.com/" +JSON.parse(posts) ;
     console.log(link)
       fetch(link)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            this.setState({data:data});
           this.setState({ posts: [ data,...this.state.posts] });
         
            this.setState({ title: data.title });
            this.setState({ body: data.body});
           this.setState({id:data.id})
         })
         .catch((err) => {
            console.log(err.message);
         });
         
   };
   
      handleButtonClear = (e) => {
         e.preventDefault();
         this.setState({value:``})
      }


      handleDelete = (e)=>{
         e.preventDefault();
         this.setState({values:e.target.values});
         const id = e.target.value;
         console.log(id);
         this.setState(this.state.data.splice((id-1), 1));
         console.log(this.state.data)
      }
        
      
       handleEdit=(e)=>{
         e.preventDefault();
         this.setState({valuess:e.target.valuess});
         const body = JSON.stringify(e.target.valuess);
         console.log(body);
         return body;
       }
       handleEditClick(id,body){
         this.setState(this.state.data.splice(id, 1,(body))); 
         
=======
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
>>>>>>> 8f723d5bf209a5b5ec5fb329784442975302c1bf
}
  
  // console.log(id);
   //let link = "https://jsonplaceholder.typicode.com/posts?id=" + JSON.parse(id);
   //console.log(link);
  // fetch(link,
  // {method: 'DELETE',
  //  });
  

<<<<<<< HEAD

   render() {
      const { data  } = this.state;
      const { title, posts, body,id } =  this.state;

    
return (
   <div className="app">
   <form onSubmit={this.handleSubmit}>
         <p>input the amount of posts</p> 
  
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" value="Submit" >submit</button>
          <button values={this.state.values} onClick={this.handleButtonClear}>reset</button>
          </form>
         <div>
         {posts.length > 0 && (
         <ul>
             {data.map(data =>(
               <li key={data.id}>{data.body};{data.id}
               <br></br>
               <input valuess={this.state.valuess} onChangeCapture={this.handleEdit}/>
         <button  id={data.id} onClickCapture={()=>this.handleEditClick(id)}>edit</button>
                
              
               </li>
               

               ))}
             </ul>
         )}
         <div>
            <p>If want to delete the post - input id of the post</p>
            <input valuess={this.state.valuess} onChangeCapture={this.handleDelete}/>
         <button  >delete</button>
         
         </div>
      </div>
      </div>
)}
             }        
                    
export default App;
=======
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
 
>>>>>>> 8f723d5bf209a5b5ec5fb329784442975302c1bf
