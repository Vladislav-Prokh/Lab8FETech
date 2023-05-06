import React from 'react';
import ExpensesItemComponent from './ExpensesItemComponent';


function f(){

}


export default function ExpensesComponent(props){
	return(
		<div className="card expenses">

		     {props.examples.map(el=><ExpensesItemComponent key={el.id} price={el.amount} description={el.title} year = {el.date.getYear()} day = {el.date.getDay()} month = {el.date.getMonth()}/>)}
    
		</div>
	)
}