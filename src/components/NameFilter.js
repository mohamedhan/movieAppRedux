import React from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css'
import {connect} from 'react-redux'



const { Search } = Input;
 const NameFilter= ({value="",onChange=()=>{}})=>  {

       return (
           
               <Search className="searchInput"
                   placeholder="input search text"
                   onChange ={(e)=>
                    onChange(e.target.value)} 
                   enterButton="Search"
                   size="large"
                  
               />
           
       )
   }
const mapStateToProps=state=>{
    return {
        value:state.titleFilter

    }
}
const mapDispatchToprops=dispatch=>{
    return {
        onChange:(newTitleFilter)=>{
            dispatch({
                type:'TITLE_Filter',
                title:newTitleFilter

            })
        }
    }
}


 const  NameFilterContainer=connect(mapStateToProps,mapDispatchToprops)(NameFilter)
   export default NameFilterContainer






















// import { MDBCol, MDBIcon } from "mdbreact";


// const nameFilter = () => {
//   return (
//     <MDBCol md="6">
//       <form className="form-inline mt-4 mb-4">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </form>
//     </MDBCol>
//   );
// }

// export default nameFilter;