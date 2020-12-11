import React from 'react';
import GridContainer from '../../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import { Divider } from '@material-ui/core';

const NotesPage = (props) =>(

      <GridContainer  justify="center">
         <GridItem  sx={12} sm={12} md={10}>
            <div style={{backgroundColor:"#d5d8db",marginTop:"20px",padding:"2% 0% 3% 0%"}} >
              <div style={{margin:props.ManualPadding}}>
                <div style={{padding:"0% 2% 2% 1%",backgroundColor:"white"}} > 
                  <div style={{padding:"6% 2% 0% .5%",fontWeight:"700",textAlign:"right",fontSize:"120%",}}>{props.TopicName}</div>
                  <Divider style={{width:"100%"}}/>
                  <div style={{height:"510px",padding:"2% 2% .5% 3%",overflow:"auto"}}>
                    <div style={{padding:"1.5% 3% 0 3%",fontSize:"102%",fontWeight:"450",color:"#6f7273"}}>
                      {props.TopicNotes}
                    </div>
                  </div>
                </div>  
              </div>
            </div>  
         </GridItem>
      </GridContainer>

    );

export default NotesPage; 