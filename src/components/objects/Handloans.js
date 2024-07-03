import React from 'react'
import '../css/Tank.css'
import axios from 'axios';
import  {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Handloans({dbpath1}) {
  
    const [tanks, setTanks] = useState([]);
    const [nozzles, setNozzles] = useState([]);
    const [machinen, setMachinen] = useState([]);

    const [clients, setClients] = useState([]);
    const [history, setHistory] = useState([]);
    const [thistory, setTHistory] = useState([]);
    
    const [nozzle_name, setNozzle_name] = useState('');
    const [product, setProduct] = useState('');
    const [machine, setMachine] = useState('');
    const [smachine, setSMachine] = useState('');
    const [side, setSide] = useState('');
    const [nozzle_no, setNozzle_no] = useState('');
    const [op_meter_reading, setOp_meter_reading] = useState('');

    const [particular, setParticular] = useState('');
    const [partyname, setPartyname] = useState('');
    const [date, setdate] = useState('');
    const [amount, setAmount] = useState('');
    const [narration, setNarration] = useState('');
    const [balance, setBalance] = useState('0');
    const [tgiven, setTgiven] = useState('');
    const [trecived, setTrecived] = useState('');


    const loadNozzles = async () => {
    /*   const result = await axios.get(dbpath1+"getNozzles.php");
      setNozzles(result.data.phpresult);
      console.log(result.data.phpresult); 
     */}

    const loadClients = async () => {
      let query="SELECT * FROM `rwt_handloans_client` ;";
      /*  
          alert(query); */
          const url = dbpath1 + 'getDynamic.php';
          let fData = new FormData();
    
          fData.append('query', query);
    
          try {
              const response = await axios.post(url, fData);
              
              if (response && response.data) {
                  
                  if (response.data.phpresult) {
                      setClients(response.data.phpresult); 
                      console.log(response.data.phpresult);
                  }
              }
          } catch (error) {
              console.log("Please Select Proper Input");
          }
      }

      const loadMachine = async (value) => {
       
      }
  
    const navigate = useNavigate();

    const getBalance = async (value) => {
      let query="SELECT balance FROM rwt_handloan_transactions WHERE client_name = '"+value+"' ORDER BY transaction_id desc LIMIT 1 ;";
         
            /* alert(query); */
            const url = dbpath1 + 'getDynamic.php';
            let fData = new FormData();
      
            fData.append('query', query);
      
            try {
                const response = await axios.post(url, fData);
                
                if (response && response.data) {
                    
                    if (response.data.phpresult) {
                         
                        console.log(response.data.phpresult);
                        setBalance(response.data.phpresult[0].balance);
                    }
                }
            } catch (error) {
                console.log("Please Select Proper Input");
            }
    }

    const onAdd = () =>{
        if (particular.length === 0) {
            alert("Particular has been left blank!");
          }   else if (partyname.length === 0) {
            alert("Party Name has been left blank!");
          }   else if (date.length === 0) {
            alert("Date has been left blank!");
          }   else if (amount.length === 0) {
            alert("Amount has been left blank!");
          } else if (balance.length === 0) {
            alert("Balance has been left blank!");
          }   else {

            let amount_given;
            let amount_recived;
          
            let updatedBalance;

            if(particular==="Recived")
            {
              amount_recived = amount;
              amount_given = 0;
              updatedBalance = parseInt(balance) - parseInt(amount_recived);
            }
            else if(particular==="Given")
            {
              amount_recived = 0;
              amount_given = amount;
              
              updatedBalance = parseInt(balance) + parseInt(amount_given);
            }
            
            

            let query="INSERT INTO `rwt_handloan_transactions` (`transaction_id`, `client_name`, `date`, `particular`, `amount_given`, `balance`, `amount_rcvd`, `narration`) VALUES (NULL,'"+partyname+"', '"+date+"', '"+particular+"', '"+amount_given+"', '"+updatedBalance  +"', '"+amount_recived+"', '"+narration +"');";
            /*  alert(query); */
             const url = dbpath1+'delTank.php';
             let fData = new FormData();
             fData.append('query', query);
             
             axios.post(url, fData)
                 .then(response => {alert(response.data);  window.location.reload();})
                 .catch(error => {
                 console.log(error.toJSON());
          });
          //load();
          loadHistory();
        } 
    }

    const loadHistory = async (value) => {
      let query="SELECT * FROM rwt_handloan_transactions WHERE client_name = '"+value+"';";
         
      /* alert(query); */
      const url = dbpath1 + 'getDynamic.php';
      let fData = new FormData();

      fData.append('query', query);

      try {
          const response = await axios.post(url, fData);
          
          if (response && response.data) {
              
              if (response.data.phpresult) {
                  setHistory(response.data.phpresult);
                  console.log(response.data.phpresult);
                  setTrecived(response.data.phpresult.reduce((acc, row) => acc + parseInt(row.amount_rcvd), 0));
                  setTgiven(response.data.phpresult.reduce((acc, row) => acc + parseInt(row.amount_given), 0));
              }
          }
          
      } catch (error) {
          console.log("Please Select Proper Input");
      }
    }

    const todayHistory = async (value) => {
        let query="SELECT * FROM rwt_handloan_transactions WHERE date = '"+datecache+"';";
           
        /* alert(query); */
        const url = dbpath1 + 'getDynamic.php';
        let fData = new FormData();
  
        fData.append('query', query);
  
        try {
            const response = await axios.post(url, fData);
            
            if (response && response.data) {
                
                if (response.data.phpresult) {
                    setTHistory(response.data.phpresult);
                    console.log(response.data.phpresult);
                    setTrecived(response.data.phpresult.reduce((acc, row) => acc + parseInt(row.amount_rcvd), 0));
                    setTgiven(response.data.phpresult.reduce((acc, row) => acc + parseInt(row.amount_given), 0));
                }
            }
            
        } catch (error) {
            console.log("Please Select Proper Input");
        }
      }

    const onDelete = async (index) => {
      let query="DELETE FROM `rwt_handloan_transactions` WHERE transaction_id = "+index+";";
    
    /*  alert(query); */ 
      const url = dbpath1+'delTank.php';
      let fData = new FormData();
      fData.append('query', query);
      
      axios.post(url, fData)
          .then(response => {alert(response.data);  window.location.reload();})
          .catch(error => {
          console.log(error.toJSON());
          });
  } 

  const displaySelectedProduct = async (index) => {
    let query="select * FROM `pupc_machines` WHERE dispensing_unit_no = '"+index+"';";
   /*  
    alert(query); */
    const url = dbpath1 + 'getDynamic.php';
    let fData = new FormData();
    fData.append('query', query);

    try {
        const response = await axios.post(url, fData);
        
        if (response && response.data) {
            
            if (response.data.phpresult) {
                setSMachine(response.data.phpresult); 
                console.log(response.data.phpresult);
                document.getElementById('ddun').innerHTML=response.data.phpresult[0]['dispensing_unit_no'];
                document.getElementById('dmake').innerHTML=response.data.phpresult[0]['make'];
                document.getElementById('dserial_no').innerHTML=response.data.phpresult[0]['serial_no'];
                document.getElementById('dconnected_tanks').innerHTML=response.data.phpresult[0]['connected_tanks'];
                document.getElementById('dproduct').innerHTML=response.data.phpresult[0]['product'];
                document.getElementById('dnozzles_in_mpd').innerHTML=response.data.phpresult[0]['nozzles_in_mpd'];
            }
        }
    } catch (error) {
        console.log("Please Select Proper Input");
    }
}

const getPartyInfo = async (value) =>
{
 

}


    useEffect(() => {
        loadNozzles();
        loadClients();
        loadMachine();
        todayHistory();
        setdate(datecache);
      }, []); 
      const datecache = Cookies.get('dateCookies');


      function convertDateFormat(inputDate) {
        // Ensure the input is a string
        if (typeof inputDate !== 'string') {
            throw new Error('Input must be a string in the format yyyy-mm-dd');
        }
    
        // Split the string into an array [yyyy, mm, dd]
        let parts = inputDate.split('-');
        
        // Validate the date parts
        if (parts.length !== 3) {
            throw new Error('Input must be in the format yyyy-mm-dd');
        }
        
        // Destructure parts to get year, month, and day
        const [year, month, day] = parts;
    
        // Ensure that year, month, and day are valid
        if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
            throw new Error('Invalid date format. Expected yyyy-mm-dd');
        }
        
        // Rearrange the array and join it back to a string
        return `${day}-${month}-${year}`;
    }
    
    // Example usage:
   // console.log
    
    //   function convertDateFormat(inputDate) {
    //     // Split the string into an array [yyyy, mm, dd]
    //     let parts = inputDate.split('-');
    
    //     // Rearrange the array and join it back to a string
    //     return parts[2] + '-' + parts[1] + '-' + parts[0];
    // }
    return (
    <>
        <div className='tankMainDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded bigFontWeight'>   
      
            <h2 className='mt-3 text-center'>Handloans</h2>
            <span style={{fontSize:'22px'}}> Date : {datecache}</span>
            <div>
           
              <h4> <span style={{marginLeft:'800px', marginTop:'10px'}}>Balance : </span> {balance}</h4>
                
                <table class="table" >
                    <thead>
                        <tr className='table-secondary'>
                        
                        <th className='tablebg'>Party Name</th>
                        <th className='tablebg'>Voucher Type</th> 
                       
                            <th className='tablebg'>Amount</th>
                           
                            <th className='tablebg'>Narration</th>
                            <th className='tablebg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>   
                       
                        <td>
                            
                            <select class="form-select  editableInput bigFontWeight" value={partyname}  aria-label="Default select example" onChange={(e) => {setPartyname(e.target.value); getBalance(e.target.value); loadHistory(e.target.value)}}>
                            <option selected>- Party Name -</option>
                            {clients.map((rest) => (  
                                    <option value={rest.party_name}>{rest.party_name} </option>
                                    ))}
                                
                              
                            </select>
                           
                        </td> 
                           
                        <td scope="row" >
                            <select class="form-select  editableInput bigFontWeight" aria-label="Default select example" value={particular} onChange={(e) => setParticular(e.target.value)} >
                                <option selected>- Voucher Type -</option>
                                  <option  value="Given">Given / Out</option>
                                  <option value="Recived">Recived / In</option>
                                </select>
                            </td> 

                           {/*  <td>
                            
                                <select class="form-select  editableInput bigFontWeight" aria-label="Default select example" value={product} /* onChange={displaySelectedProduct(product)} onChange={(e) => setProduct(e.target.value)}>
                                <option selected>- Product -</option>
                                    {tanks.map((rest) => (
                                        <option value={rest.product}>{rest.product}</option>
                                    ))}
                                </select>
                               
                            </td> */}
                           
                           
                            <td><input type="text" class="form-control  editableInput bigFontWeight" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} /></td>
                            
                            <td><input type="text" class="form-control  editableInput bigFontWeight" placeholder="Narration" onChange={(e) => setNarration(e.target.value)} /></td>
                             <td><button type="button" class="btn btn-primary" onClick={onAdd}>ADD</button></td>
                        </tr>
                        
                    </tbody>
                </table>  

                <br></br>
                Todays Transactions: <br></br>
                
                <table class="table">
                    <thead>
                        <tr className='table-secondary'>
                             <th className='tablebg'>Party Name</th>
                            <th className='tablebg'>Voucher Type - Given</th>
                            <th className='tablebg'>Voucher Type - Recived</th>
                            <th className='tablebg'>Balance</th>
                            <th className='tablebg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    {thistory.map((res,index)=>
                                <tr className='hovereffect' key={index}>
                                    <td>{res.client_name}</td>   
                                    <td>{res.amount_given}</td>
                                    <td>{res.amount_rcvd}</td>
                                    <td>{res.balance}</td>
                                    <td style={{width:'50px'}}>
                                        <button type="button" style={{height:'30px', paddingTop:'2px'}} id={"tank"+res.transaction_id} class="btn btn-danger" onClick={() => onDelete(res.transaction_id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        
                                {/* <tr>
                                  <td id="ddun">Haldirams</td>
                                      <td id="dmake">Recived</td>   
                                      <td id="dserial_no">0</td>
                                    <td id="dserial_no">5000</td>
                                    <td id="dproduct">12000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                 
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">15-10-2023</td>
                                      <td id="dmake">Given</td>   
                                    <td id="dserial_no">3000</td>
                                    <td id="dserial_no">0</td>
                                    <td id="dproduct">17000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">02-10-2023</td>
                                      <td id="dmake">Recived</td>   
                                      <td id="dserial_no">0</td>
                                    <td id="dserial_no">1000</td>
                                    
                                    <td id="dproduct">14000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">25-09-2023</td>
                                
                                      <td id="dmake">Given</td>   
                                    <td id="dserial_no">2000</td>
                                    <td id="dserial_no">0</td>
                                    <td id="dproduct">15000</td>
                                    <td id="dnozzles_in_mpd">Cheque</td>
                                 
                                </tr>    */}
                             {/*    <tr>
                                  <td><b>Closing Balance</b></td>
                                  <td></td>
                                  
                                  <td><b>{tgiven}</b></td>
                                  <td><b>{trecived}</b></td>
                                  <td></td>
                                  <td></td>
                                </tr> */}
                            
                    </tbody>
                 
                </table>    
                
                
                <br></br>
                 Client Transaction History: <br></br>
                <span>Party Name : {partyname}</span>  <br></br>
                <table class="table">
                    <thead>
                        <tr className='table-secondary'>

                           
                             <th className='tablebg'>Date</th>
                            <th className='tablebg'>Particulars</th>
                            <th className='tablebg'>Amount Given</th>
                           
                            <th className='tablebg'>Amount Rcvd </th>
                            <th className='tablebg'>balanceC</th>
                            <th className='tablebg'>Narration</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       
                    {history.map((res,index)=>
                                <tr className='hovereffect' key={index}>

                                     <td>{res.date}</td>   
                                    
                                    <td>{res.particular}</td>
                                    
                                    <td>{res.amount_given}</td>
                                    <td>{res.amount_rcvd}</td>
                                    <td>{res.balance}</td>
                                    <td>{res.narration}</td>
                                   
                                  
                                  {/*   <td style={{width:'50px'}}>
                                       
                                        <button type="button" id={"tank"+res.tank_no} class="btn btn-primary" onClick={() => onMoveRetail(res.product_id)}>Move</button>
                                    </td> */}
                                </tr>
                                )} 

                    
                                {/*
                                 <tr>
                                  <td id="ddun">Haldirams</td>
                                      <td id="dmake">Recived</td>   
                                      <td id="dserial_no">0</td>
                                    <td id="dserial_no">5000</td>
                                    <td id="dproduct">12000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                 
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">15-10-2023</td>
                                      <td id="dmake">Given</td>   
                                    <td id="dserial_no">3000</td>
                                    <td id="dserial_no">0</td>
                                    <td id="dproduct">17000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">02-10-2023</td>
                                      <td id="dmake">Recived</td>   
                                      <td id="dserial_no">0</td>
                                    <td id="dserial_no">1000</td>
                                    
                                    <td id="dproduct">14000</td>
                                    <td id="dnozzles_in_mpd">Cash</td>
                                </tr>   
                                <tr>
                                <td id="dconnected_tanks">25-09-2023</td>
                                
                                      <td id="dmake">Given</td>   
                                    <td id="dserial_no">2000</td>
                                    <td id="dserial_no">0</td>
                                    <td id="dproduct">15000</td>
                                    <td id="dnozzles_in_mpd">Cheque</td>
                                 
                                </tr>    
                                <tr>
                                  <td><b>Closing Balance</b></td>
                                  <td></td>
                                  
                                  <td><b>{tgiven}</b></td>
                                  <td><b>{trecived}</b></td>
                                  <td></td>
                                  <td></td>
                                </tr> */}
                            
                    </tbody>
                 
                </table>     
            </div>
            <br></br>
            
        </div>
    </>
  )
}