import React from 'react';
import SummaryButtons from '../SummaryButtons';
import './SummaryButton.css';
import Aux from '../../../hoc/Aux';

const ButtonSummary = (Props) =>{
    console.log(Props.chapterss);

 return (
     <SummaryButtons
         elementTypes="li"
         ClassNames="ListOfAvailableChapterAndTopics"
         clicked= {Props.Clicked}
         >
         {Props.chapterss} 
     </SummaryButtons>         
    )
}

export default ButtonSummary;