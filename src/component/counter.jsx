import { Button, Card, Container, Grid,  Typography } from '@mui/material'
import React, { useState } from 'react'






function Counter() {
  let [count,setCount]=useState(0)
  let [button,setButton]=useState(false)
  let [warning,setWarning]=useState('')
  let [savedCounts,setSavedcounts]=useState([])
  
  
  

  const handleIncrement=()=>{
    setCount(++count)
    setWarning('')
    setButton(false)
  }
   
  const handleDecrement=()=>{
  
   if (count>0){
    setCount(--count)
    setButton(false)
    
   }
   if (count===0){
    setButton(true)
    setWarning('You Cannot Count Lower Than Zero')
   }
  }

  const handleSave=()=>{
    setSavedcounts([...savedCounts,count])
    console.log(savedCounts)

  
    setCount(0)


  }
 

  return (
    <React.Fragment>
      <Container maxWidth="xs" >
        <Grid  >
          <Grid item >
      <Card  elevation={12}  sx={{padding:'7%',marginBottom:'20%',paddingTop:'5%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignitems:"center",color:'darkviolet',marginTop:'20%'}}>
    <Typography variant='h1' sx={{color:'darkviolet',textAlign:'center'}}>{count}</Typography>
    <Button  onClick={handleIncrement}  sx={{background:'darkviolet',color:'white',fontSize:'25px',marginBottom:'1%'}}>+</Button>
    <Button  onClick={handleDecrement}  disabled={button}  sx={{background:'darkviolet',color:'white',fontSize:'25px',marginBottom:'1%'}}>-</Button>
    <Button  onClick={handleSave} sx={{background:'violet',fontSize:'25px',color:'black',marginBottom:'1%'}}>Save</Button>
    <Typography sx={{color:'red',marginBottom:'1%'}}>{warning}</Typography>
    <Typography variant='h5' textAlign={'center'}>SAVED COUNTS</Typography>
    <Typography sx={{display:'flex',flexdirection: "column"}}>{}</Typography>
         
    {savedCounts.map((item, index) => (
        <Typography sx={{fontSize:'25px',textAlign:'center'}} key={index}>{item}</Typography>
      ))}

      </Card>


      </Grid>

      </Grid>


      </Container>










    </React.Fragment>
  )
}



export default Counter
