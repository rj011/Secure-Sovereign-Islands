import React from "react";
import { Butterflybg } from "./Canvas";
import { Button } from "@mui/material";
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from "../Responsive/index";


const Home=()=>{
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    return(
        
        <div >
            
           <Butterflybg/>
           
           

           <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:20, flexWrap:'wrap'}}>
           <Button variant="contained" style={{borderRadius:20 ,backgroundColor:'#252525',marginRight:20,marginLeft:20,marginTop:20}}>Aadhar</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>PAN</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Passport</Button>
           </div>

        

        
               
          
               
              
                
                


        
        
            
        </div>
    )

    

    
    
}






export default Home;