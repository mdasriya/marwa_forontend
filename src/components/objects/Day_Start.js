import React from 'react'
import '../css/Tank.css'
import '../css/DayStart.css'
import axios from 'axios';
import  {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { get } from 'react-hook-form';
export default function Tank({dbpath1, setDate}) {
  
  const isUserLoggedIn = Cookies.get('dateCookies');

  const setCookies = (e) => {
  
    Cookies.set('dateCookies', e);
    setTimeout(function() {
      clacddifamsstart();
      clacddifbspeedstart();
      clacddifhsdstart();
    }, 1000);
    
  }

  const [amsToday, setamsToday] = useState('');
  const [bspeedToday, setbspeedToday] = useState('');
  const [hsdToday, sethsdToday] = useState('');

  const [lastDayData, setLastDayData] = useState([]);

  const [conditionType, setConditionType] = useState('');

  const [amsLast, setamsLast] = useState('');
  const [bspeedLast, setbspeedLast] = useState('');
  const [hsdLast, sethsdLast] = useState('');

  const [amsDifference, setamsDifference] = useState('0');
  const [bspeedDifference, setbspeedDifference] = useState('0');
  const [hsdDifference, sethsdDifference] = useState('0');

  const adjustDate = async (currentDate, adjustment) => {
    // Parse the date string to a Date object
  try
  {

    let dateParts = currentDate.split('-');
    let year = parseInt(dateParts[0], 10);
    let month = parseInt(dateParts[1], 10) - 1;  // JavaScript months are 0-based
    let day = parseInt(dateParts[2], 10);

    let dateObject = new Date(year, month, day);

    // Adjust the date
    dateObject.setDate(dateObject.getDate() + adjustment);

    // Construct the adjusted date string in YYYY-MM-DD format
    let adjustedYear = dateObject.getFullYear();
    let adjustedMonth = (dateObject.getMonth() + 1).toString().padStart(2, '0');  // Convert 0-based month back to 1-based
    let adjustedDay = dateObject.getDate().toString().padStart(2, '0');
    let lastdate = `${adjustedYear}-${adjustedMonth}-${adjustedDay}`;
    

              let query1 = "SELECT * FROM rwt_day_start WHERE date='"+lastdate+"';";
    
             
              const url1 = dbpath1 + 'getDynamic.php';
              let fData1 = new FormData();
              fData1.append('query', query1);
 
                  const response1 = await axios.post(url1, fData1);
                  
                  if (response1 && response1.data) {
                      if (Array.isArray(response1.data.phpresult) && response1.data.phpresult.length > 0) {
                          // Data is available
                        
                          console.log(response1.data.phpresult);
                          setamsLast(response1.data.phpresult[0].ms);
                          setbspeedLast(response1.data.phpresult[0].speed);
                          sethsdLast(response1.data.phpresult[0].hsd);
                         
            
                          
            
                      } else {
                          // Data is not available
                        
                      }
                  }
              } catch (error) {
                  console.log("Please Select Proper Input");
              }
}

useEffect(() => {
  try
  {
    adjustDate(datecache,-1);
    
    getDayStartData(datecache,-1);
    setTimeout(function() {
    clacddifamsstart();
    clacddifbspeedstart();
    clacddifhsdstart();
}, 2000);
  }
   catch{
    console.log('');
   }


 }, []); 

const clacddifamsstart = () => {
  
  var amt = document.getElementById("amsToday").value;
  var aml = document.getElementById("amsLast").value;

  let temp=    parseFloat(amt) - parseFloat(aml);
  //alert(parseFloat(amt) +" - "+ parseFloat(aml)+" = "+temp+" -> "+3);
  setamsDifference(temp.toFixed(2));
  if(temp>=0)
  {
    document.getElementById('diffms').style.color = 'green';
  }
  else{
    document.getElementById('diffms').style.color = 'red';
  }
}
const clacddifbspeedstart = () => {
  
  var amt = document.getElementById("bspeedToday").value;
  var aml = document.getElementById("bspeedLast").value;

  let temp=    parseFloat(amt) - parseFloat(aml);
 // alert(parseFloat(amt) +" - "+ parseFloat(aml)+" = "+temp+" -> "+3);
  setbspeedDifference(temp.toFixed(2));
  if(temp>=0)
  {
    document.getElementById('diffspeed').style.color = 'green';
  }
  else{
    document.getElementById('diffspeed').style.color = 'red';
  }
}
const clacddifhsdstart = () => {

  
  var amt = document.getElementById("hsdToday").value;
  var aml = document.getElementById("hsdLast").value;

  let temp=    parseFloat(amt) - parseFloat(aml);
  //alert(parseFloat(amt) +" - "+ parseFloat(aml)+" = "+temp+" -> "+3);
  sethsdDifference(temp.toFixed(2));
  if(temp>=0)
  {
    document.getElementById('diffhsd').style.color = 'green';
  }
  else{
    document.getElementById('diffhsd').style.color = 'red';
  }
}
const getDayStartData = async (dateSelected, adjust) => {
  
  adjustDate(dateSelected,-1);
  let query = "SELECT * FROM rwt_day_start WHERE date='"+dateSelected+"';";
    
  /* alert(query); */
  const url = dbpath1 + 'getDynamic.php';
  let fData = new FormData();
  fData.append('query', query);
    
  try {
      const response = await axios.post(url, fData);
      
      if (response && response.data) {
          if (Array.isArray(response.data.phpresult) && response.data.phpresult.length > 0) {
              // Data is available
             
              console.log(response.data.phpresult);
              setamsToday(response.data.phpresult[0]['ms']);
              setbspeedToday(response.data.phpresult[0]['speed']);
              sethsdToday(response.data.phpresult[0]['hsd'])

            /*   setTimeout(function() {
                calcamsDifference(response.data.phpresult[0]['ms'],2);
              }, 5000);  */
              /* calcbspeedDifference(response.data.phpresult[0]['speed']);
             
              calchsdDifference(response.data.phpresult[0]['hsd']); */
             
               //adjustDate(dateSelected,-1);

          } else {
              setamsToday("");
              setbspeedToday("");
              sethsdToday("")
              setamsDifference(0);
              setbspeedDifference(0);
              sethsdDifference(0);
              adjustDate(dateSelected,-1);

              // Data is not available
            
          }
      }
  } catch (error) {
      console.log("Please Select Proper Input");
  }
}

  const boxes = document.querySelectorAll('.inputDivPrice');

  // Attach the event listener to each box
  boxes.forEach(function(box) {
      box.addEventListener('click', function(event) {
          // First, remove 'active' class from all boxes
          boxes.forEach(b => b.classList.remove('active'));
          
          // Then, add the 'active' class to the clicked box
          event.currentTarget.classList.add('active');
          
          // Stop the event from bubbling up to the document
          event.stopPropagation();
      }); 
  });
  
  // Remove the 'active' class from all boxes when clicking outside
  document.addEventListener('click', function() {
      boxes.forEach(box => box.classList.remove('active'));
  });

  const calcamsDifference = (value,flag) => {
    document.getElementById('savebtn').style.backgroundColor = 'green';
    document.getElementById('savebtn1').innerHTML = 'Save';
    
    let temp=    parseFloat(value) - parseFloat(amsLast);
    setamsDifference(temp.toFixed(2));
    if(temp>=0)
    {
      document.getElementById('diffms').style.color = 'green';
    }
    else{
      document.getElementById('diffms').style.color = 'red';
    }
  }

  const calcbspeedDifference = (value) => {
    document.getElementById('savebtn').style.backgroundColor = 'green';
    document.getElementById('savebtn1').innerHTML = 'Save';
    let temp=    parseFloat(value) - parseFloat(bspeedLast);
    setbspeedDifference(temp.toFixed(2));
   
    if(temp>=0)
    {
      document.getElementById('diffspeed').style.color = 'green';
    }
    else{
      document.getElementById('diffspeed').style.color = 'red';
    }
  }

  const calchsdDifference = (value) => {
    document.getElementById('savebtn').style.backgroundColor = 'green';
    document.getElementById('savebtn1').innerHTML = 'Save';
    let temp= parseFloat(value) - parseFloat(hsdLast);
    sethsdDifference(temp.toFixed(2));
    if(temp>=0)
    {
      document.getElementById('diffhsd').style.color = 'green';
    }
    else{
      document.getElementById('diffhsd').style.color = 'red';
    }
  }

  const onOkay = () => {
    document.getElementById('savepop').style.marginLeft = '-5000px';
  }

  const onAdd = async () =>{

    if (amsToday.length === 0) {
      alert("A-MS been left blank!");
    }   else if (bspeedToday.length === 0) {
      alert("B-Speed has been left blank!");
    }   else if (hsdToday.length === 0) {
      alert("C-HSD has been left blank!");
    }   else if (amsDifference.length === 0) {
      alert("Difference Not Calculated");
    } else if (bspeedDifference.length === 0) {
      alert("Difference Not Calculated");
    }else if (hsdDifference.length === 0) {
      alert("Difference Not Calculated");
    }  else{
    
    let query = "SELECT * FROM rwt_day_start WHERE date='"+datecache+"';";
    
    /* alert(query); */
    const url = dbpath1 + 'getDynamic.php';
    let fData = new FormData();
    fData.append('query', query);
      
   
        const response = await axios.post(url, fData);
        
        if (response && response.data) {
            document.getElementById('savebtn').style.backgroundColor = 'red';
            document.getElementById('savebtn1').innerHTML = 'Saved';
            if (Array.isArray(response.data.phpresult) && response.data.phpresult.length > 0) {
                // Data is available
                let query="UPDATE `rwt_day_start` SET `ms` = '"+amsToday+"', `speed` = '"+bspeedToday+"', `hsd` = '"+hsdToday+"', `msdiff` = '"+amsDifference+"', `speeddiff` = '"+bspeedDifference+"', `hsddiff` = '"+hsdDifference+"' WHERE `date` = '"+datecache+"';";
                   
                const url = dbpath1+'delTank.php';
                let fData = new FormData();
                fData.append('query', query);
                
                axios.post(url, fData)
                    .then(response => {/* alert(response.data);  *//*  window.location.reload(); */})
                    .catch(error => {
                    console.log(error.toJSON());
             });
               
  
            } else {
               
  
                // Data is not available
               
          
                  let query="INSERT INTO `rwt_day_start` (`day_start_id`, `date`, `ms`, `speed`, `hsd`, `msdiff`, `speeddiff`, `hsddiff`) VALUES (NULL,'"+datecache+"',"+amsToday+","+bspeedToday+","+hsdToday+","+amsDifference+","+bspeedDifference+","+hsdDifference+");";
                   
                   const url = dbpath1+'delTank.php';
                   let fData = new FormData();
                   fData.append('query', query);
                   
                   axios.post(url, fData)
                       .then(response => {/* alert(response.data); */  /* window.location.reload(); */})
                       .catch(error => {
                       console.log(error.toJSON());
                });
            }
        }
    }
    document.getElementById('savepop').style.marginLeft = '100px';
    document.getElementById('savepop').style.marginTop = '-400px';
    
    } 


  const datecache = Cookies.get('dateCookies');
    return (

    <>
    <center>

      <b>
        

        <div className='tankMainDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded bigFontWeight'>   
            <h2 className='mt-3 text-center'> Day Start</h2><br></br>
            <div style={{display:'flex'}}>
               <h5 style={{marginLeft:'36%'}} className='mt-2'><span style={{fontSize:'26px'}}> Reading Day : </span></h5><input type="date"  value={datecache} style={{width:'200px', marginLeft:'20px', border:'2px solid red', fontSize:'22px', fontWeight:'500'}} class="form-control" id="dateinput"  onChange={(e) =>{ setDate(e.target.value); setCookies(e.target.value); getDayStartData(e.target.value, -1) }} pattern="\d{4}-\d{2}-\d{2}"></input>
            </div>      
           
            <div>
              <div className='container' style={{padding:'150px', paddingTop:'50px'}}>
               <div className='row'>
                  <div className='col-4'>
                  <h4 style={{color:'red'}}>A-MS</h4><br></br>
                  Reading Day
                  <input type="text" class="form-control inputDivPrice" value={amsToday} id="amsToday" onChange={(e) => {setamsToday(e.target.value); calcamsDifference(e.target.value,1);}} aria-describedby="emailHelp"/>
                  </div>
                  <div className='col-4'>
                  <h4 style={{color:'red'}}>B-SPEED </h4> <br></br>
                  Reading Day
                  <input type="text" class="form-control inputDivPrice" value={bspeedToday} id="bspeedToday" onChange={(e) =>{ setbspeedToday(e.target.value); calcbspeedDifference(e.target.value); }} aria-describedby="emailHelp"/>
                  </div>
                  <div className='col-4'>
                  <h4 style={{color:'red'}}>C-HSD </h4> <br></br>
                  Reading Day
                  <input type="text" class="form-control inputDivPrice" value={hsdToday} id="hsdToday" onChange={(e) =>{ sethsdToday(e.target.value); calchsdDifference(e.target.value);}} aria-describedby="emailHelp"/> 
                  </div>
                </div>
                <button type="button" id="savebtn" style={{marginTop:"-75px", marginLeft:'890px', backgroundColor:'green', color:'white'}} onClick={onAdd} class="btn"><span id="savebtn1">Save</span></button> 
                <div className='row'>
                  <div className='col-4'>
                  
                  Last Day<br></br>
                  <input type="text" class="form-control inputDivPrice" value={amsLast} id="amsLast"  aria-describedby="emailHelp" disabled/>
                  </div>
                  <div className='col-4'>
                 
                  Last Day
                  <input type="text" class="form-control inputDivPrice" value={bspeedLast} id="bspeedLast" aria-describedby="emailHelp" disabled/>
                  </div>
                  <div className='col-4'>
                  
                  Last Day
                  <input type="text" class="form-control inputDivPrice" value={hsdLast} id="hsdLast"  aria-describedby="emailHelp" disabled/>
                  </div>

                </div>
                <div className='row'>
                  <div className='col-4'>
                  <br></br>
                  Difference MS
                  <input type="email" class="form-control inputDivPrice" value={amsDifference} id="diffms"  aria-describedby="emailHelp" disabled/>
                  </div>
                  <div className='col-4'>
                   <br></br>
                   Difference Speed
                  <input type="email" class="form-control inputDivPrice" value={bspeedDifference} id="diffspeed" aria-describedby="emailHelp" disabled/>
                  </div>
                  <div className='col-4'>
                  <br></br>
                  Difference HSD
                  <input type="email" class="form-control inputDivPrice" value={hsdDifference} id="diffhsd" aria-describedby="emailHelp" disabled/>
                  </div>
                  <div className='savepop' id='savepop'>
          <center>
            <br></br>
            <h3>Saved ✅</h3>
          <h5 style={{marginTop:'20px', marginBottom:'20px'}}> Difference MS :<span className='diffms'> {amsDifference} </span> <br></br> 
            Difference Speed :<span className='diffspeed'> {bspeedDifference} </span><br></br>
            Difference HSD : <span className='diffhsd'> {hsdDifference} </span> <br></br> </h5>   
            <button type="button" id="savebtn" style={{ backgroundColor:'green', color:'white'}} onClick={onOkay} class="btn">Okay</button> 
              
          </center>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </b>
        </center>

       
    </>
  )
}
