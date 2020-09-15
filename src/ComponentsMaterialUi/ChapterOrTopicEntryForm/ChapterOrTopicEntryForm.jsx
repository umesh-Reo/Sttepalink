import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '../Card/Card.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button  from "../CustomButtons/Button.jsx";

const Styles = {
    InputModification:{
        padding:"1% 0% 0% 1%",
        fontSize:"14px",
        fontWeight:"650",
        color:"#696666"
    },
}
const ChapterEntry =  ( props ) => {
    const {classes} = props;
  
 return (
         <Card style={{width:"100%" , margin:"0%",borderRadius:".8em .8em .5em .5em"}}>
            <CardHeader 
             style={{fontSize:"20px",
             paddingTop:"7%",
             fontWeight:"650",
             color:"#f7f7f7",
             borderRadius:".5em .5em 0 0",
             backgroundColor:"#b4becf"}}
             >
             {props.Headder}
            </CardHeader>
            <CardBody> 
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                     formControlProps={{
                       fullWidth: true,
                     }}
                     className={classes.InputModification}
                     elementType="input"
                     value={props.StandardOrSub  + "   :  " + props.officialdetailsStandart}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: true,
                       type:"text",
                     }}
                    /> 
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType="input"
                     className={classes.InputModification}
                     value={props.ChapterOrSub +"  :  "+props.officialdetailsSubject}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: true,
                       type:"text",
                     }}
                    /> 
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                     labelText={props.PlaceholderForChapterOrTopicNumber}
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType="input"
                     handleChange={props.ChapterOrTopicNumberEntry}
                     value={props.ChapterOrTopicNumberValue}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:"number",
                     }}
                    /> 
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                     labelText={props.PlaceholderForChapterOrTopicName}
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType="input"
                     handleChange={props.ChapterOrTopicNameEntry}
                     value={props.ChapterOrTopicNameValue}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:"text",
                     }}
                    /> 
              </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button style={{padding:"2.5% 0 0% 0"}} onClick={props.CreateNewChapter}>Add+</Button>
            </CardFooter>      
         </Card>    
    )
   
}

export default  withStyles(Styles)(ChapterEntry);