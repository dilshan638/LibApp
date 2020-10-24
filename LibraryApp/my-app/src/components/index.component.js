import axios from 'axios';
import React,{Component} from 'react';
import TableRow from './TableRow';

export default class Index extends Component{

    constructor(props){
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        axios.get('http://localhost:400/business')
        .then(response=>{
            this.setState({business :response.data});
        })
        .catch(function (error){
            console.log(error);
        })
    }

tbRow(){
    return this.state.business.map(function (object, i){
        return <TableRow obj= {object} key={i}></TableRow>;
    });
}


    render(){
        return(
         <div>
             <h3 align="center"> Library Views</h3>
             <table className="table table-striped" style={{marginTop:20}}>

                 <thead>
                     <tr>
                         <th>Book Name</th>
                     <th>Book Code</th>
                     <th>Student NIC Number</th>
                     <th colSpan="2">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.tbRow()}
                 </tbody>
             </table>
         </div>
        )
       
    }

}