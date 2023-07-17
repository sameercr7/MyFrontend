import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            // count:0,
          
         mydatabase: {  
            name:"Dummy name",
            id:"Dummy Location"
        }
        }
    }




    async componentDidMount(){
    
         const data=await fetch("https://api.github.com/users/sameercr7");
         const json=await data.json();
         console.log(json);
        this.setState({
               mydatabase:json,
        })
        // console.log(mydatabase);
    }
         

    
    render(){
        // this.state.mydatabase.name;
        // .location;
        const {name,id,avatar_url}=this.state.mydatabase;
    //    const {name,loc}=this.props;
    //    const {count}=this.state;
       
        return(
            <div className="user-card">
                {/* <h2>Count:{count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                       })
                }}>Click me</button> */}
               <img src={avatar_url}/>
                <h1>Name:{name}</h1>
                <h2>Location:{id}</h2>
                <h3>contact-email:sameer05072001@gmail.com</h3>
            </div>

        );
    };

}
export default User;



// const [count]=useState(0)
