import React from 'react';
import Footer from './footer';
import './tool.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL : "http://localhost:5000/"
});


const Tool = () => {
  const [domain,setDomain] = useState('');
  const fetchData = async ()=>{
    try{
        const response = await api.get("/");
        console.log(response.data.data.list);
        setList(response.data.data.list);
    }catch(err){}
};    const [list,setList] = useState([]);
const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
    console.log(domain);
   // console.log(email);
    const response =  await api.post("/", {
      domain
    }
    );  
    console.log(response);
    setDomain("");
      fetchData();
  }catch(err){}
};
      useEffect(() => {
      fetchData();
      }, [])
    return(
      <html>
       <div className="wrapper">
           <div class="container">



         <div className="header">
             <h3>Ecommerce Seller Fees Calculator</h3>
             <div class="title-text">
<h4>Find out how much you can earn by selling on top marketplaces!</h4>
</div>
         </div>



         <div className="form-horizontal">
           {/*First Text box*/}
         <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <div class="col-sm-4" >
  
    <select class="form-control" value={domain} onChange={(e)=>setDomain(e.target.value)} id="exampleFormControlSelect1">
      <option >-- Choose a Category --</option>
      <option value={"Animal_&_Pet_Care"}>Animal & Pet Care</option>
      <option>Arts & Crafts</option>
      <option>Automobile & Parts</option>
      <option>Beauty & Cosmetics</option>
      <option>Computers, Electronics & Acc.</option>
      <option>Fashion & Apparel</option>
      <option>Food & Beverage</option>
      <option>Garden & Home Goods</option>
      <option>Health & Fitness</option>
      <option>Jewelry & Accessories</option>
      <option>Media & Entertainment</option>
      <option>Toys & Games</option>
      <option>Travel</option>
    </select>
  </div>


    </div>
  </div>
  {/*Second Text box*/}
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Ad medium</label>
    <div class="col-sm-10">
    <div class="col-sm-4">
  
    <select class="form-control" id="exampleFormControlSelect1">
    <option>-- Choose a Medium --</option>
      <option>Ecommerce</option>
      <option>Social Media</option>
      <option>Email</option>
      <option>Search</option>
      <option>Display Ads</option>
      <option>Television ads</option>
      <option>Print</option>
      <option>Outdoor</option>
    </select>
  </div>


    </div>
  </div>
{/*Third Text box*/}

  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Calculation</label>
    <div class="col-sm-10">
    <div class="col-sm-4">
   <input type="number" class="form-control" ></input></div>
   <div class="col-sm-10">
<button type="button" onClick = {handleSubmit} class="btn btn-danger">Check</button>
</div>


    </div>
  </div>
 
         </div>
{/*Table*/}
<div class="table-responsive">
<table class="table table-condensed " style={{border:"1px solid black",backgroundColor:"#fff"}}>
    <thead >
      <tr style={{height:"40px"}}>
        <th></th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{fontWeight:"bolder"}}>Selling Price</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Marketplace Commission</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>GST on Commission</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Marketplace Payment Fee</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>GST on Payment Fee</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>GST on Item</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Shipping (inclusive taxes)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td style={{color:"red"}}>Net in Hand*</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Deductions</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td style={{color:"red"}}>Net in Hand%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>
  <div class="desc">
<p>*Note: Above calculations are not 100% accurate. These are approximate figures only and may vary based on exact product<br />
weight and packaging dimensions.</p>
</div>

        </div>
        {list &&
             
             list.map((l) => {
               return(                             
                      <tr key={ list.id }>
                                          <td id="td1"> <h3>{ l.search }</h3></td>
                      </tr>
               )
             })
         }
       </div>
       <Footer />
       </html>
    )
}

export default Tool;