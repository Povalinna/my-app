import React, { Component } from 'react';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: ``,
         userid: ``,
         title: ``,
         posts: [],
         body: ``,
         data: [],
      };
   }

   handleSubmit = (e) => {
      e.preventDefault();
   }
   handleChange = (event) => {
      this.setState({ value: event.target.value });
      const id = event.target.value;
      let link = "https://jsonplaceholder.typicode.com/posts?_limit=" + JSON.parse(id);

      console.log(link)
      fetch(link)
         .then((response) => response.json())
         .then((data) => {
          
            this.setState({ data: data });
            this.setState({ title: data.title });
            this.setState({ body: data.body });
            this.setState({ id: data.id })
         })
         .catch((err) => {
            alert(err);
         });

   };

   handleButtonClear = (e) => {
      e.preventDefault();
      this.setState({ value: `` })
   }


   handleDelete = (e) => {
      e.preventDefault();
      this.setState({ values: e.target.values });
      const id = e.target.value;
      
      this.setState(this.state.data.splice((id - 1), 1));
      
   }


   handleEdit = (e) => {
      this.setState({ values: e.target.innerText });
   }


   render() {
      const { data } = this.state;
      const { title, posts, body, id } = this.state;


      return (
         <div className="app">
            <form onSubmit={this.handleSubmit}>
               <p>input the amount of posts</p>

               <input type="text" className='numberPost' value={this.state.value} onChange={this.handleChange} />
               <button type="submit" value="Submit" >submit</button>
               <button values={this.state.values} onClick={this.handleButtonClear}>reset</button>
            </form>
            <div>
               <ul>
                  {this.state.data.map(item => (
                     <li key={item.id} contentEditable onBlur={this.handleEdit}>{item.body};{item.id}
                        <br></br>
                        <button >edit</button>
                     </li>
                  ))}
               </ul>

               <div>
                  <p>If you want to delete the post - input id of the post</p>
                  <input values={this.state.values} onChangeCapture={this.handleDelete} />
                  <button  >delete</button>

               </div>
            </div>

         </div>
      )
   }
}

export default App;
