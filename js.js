let mark_1=document.getElementById("1");
let mark_2=document.getElementById("2");
let mark_3=document.getElementById("3");
let mark_4=document.getElementById("4");
let mark_5=document.getElementById("5");
let mark_6=document.getElementById("6");
let mark_7=document.getElementById("7");
let mark_8=document.getElementById("8");
let mark_9=document.getElementById("9");

let arr=[1,2,3,4,5,6,7,8,9] ;
let x ;
let i ;
let y=9 ;
let flag=1 ;
x=1 ;
y=1 ;

function check()
{
    if((mark_1.value==="O"||mark_1.value==="X")&&(mark_1.value===mark_2.value)&&(mark_2.value===mark_3.value))
        {
            if(mark_1.value==="O")
                {
                    alert("You Win");
                    
                    
                }
            else
                {
                    alert("You Lose");
                    
                }
        }
    
    if((mark_4.value==="O"||mark_4.value==="X")&&(mark_4.value===mark_5.value)&&(mark_5.value===mark_6.value))
        {
            if(mark_4.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    if((mark_7.value==="O"||mark_7.value==="X")&&(mark_7.value===mark_8.value)&&(mark_8.value===mark_9.value))
        {
            if(mark_7.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    if((mark_1.value==="O"||mark_1.value==="X")&&(mark_1.value===mark_5.value)&&(mark_5.value===mark_9.value))
        {
            if(mark_1.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    
    if((mark_3.value==="O"||mark_3.value==="X")&&(mark_3.value===mark_5.value)&&(mark_5.value===mark_7.value))
        {
            if(mark_3.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    
    if((mark_1.value==="O"||mark_1.value==="X")&&(mark_1.value===mark_4.value)&&(mark_4.value===mark_7.value))
        {
            if(mark_1.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    
    if((mark_2.value==="O"||mark_2.value==="X")&&(mark_2.value===mark_5.value)&&(mark_5.value===mark_8.value))
        {
            if(mark_2.value==="O")
                {
                    alert("You Win");
                }
            else
                {
                    alert("You Lose");
                }
        }
    
    
    
    if((mark_3.value==="O"||mark_3.value==="X")&&(mark_3.value===mark_6.value)&&(mark_6.value===mark_9.value))
        {
            if(mark_1.value==="O")
                {
                    alert("You Win");
                }
            else (mark_3.value==="X")
                {
                    alert("You Lose");
                }
        }
    
    
    
    
}

function random()
{   flag=1 ;
    let result=0 ;
 for(let check=0;check<arr.length;check++)
     {
       result=result+arr[check] ; 
     }
 if(result!=0)
  {
    while(flag) 
    {
        x=Math.random();
        x=x*100 ;
        x=parseInt(x);
        x=(x%9)+1 ;
       
      for(i=0;i<arr.length;i++)
          {
              if(arr[i]===x)
                  {
                      flag=0 ;
                      arr[i]=0;
                      
                  }
              
          }
        
        
    }
  }
    return x;
   
}


//function pc_pro()
//{
//    if((mark_1.value==="O")&&(mark_2.value==="O"))
//        {
//            mark_3.value="X";
//        }
//}


function pc_turn_smart(x)
{  
    
    
    if((mark_1.value==="X")&&(mark_2.value==="X")&&(mark_3.value===""))
        {
            
            mark_3.value="X";
            mark_3.disabled=true ;
            arr[2]=0;
        }
    
    else if((mark_1.value==="X")&&(mark_3.value==="X")&&(mark_2.value===""))
        {
            mark_2.value="X";
            mark_2.disabled=true ;
            arr[1]=0;
        }
    
    else if((mark_2.value==="X")&&(mark_3.value==="X")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ;
            arr[0]=0;
        }
    
    else if((mark_4.value==="X")&&(mark_5.value==="X")&&(mark_6.value===""))
        {
            mark_6.value="X";
            mark_6.disabled=true ;
            arr[5]=0;
        }
    
    else if((mark_4.value==="X")&&(mark_6.value==="X")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ;
            arr[4]=0;
        }
    
    else if((mark_5.value==="X")&&(mark_6.value==="X")&&(mark_4.value===""))
        {
            mark_4.value="X";
            mark_4.disabled=true ;
            arr[3]=0;
        }
    
    else if((mark_7.value==="X")&&(mark_8.value==="X")&&(mark_9.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ;
            arr[8]=0;
        }
    
    else if((mark_8.value==="X")&&(mark_9.value==="X")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ;
            arr[6]=0;
        }
    
    else if((mark_7.value==="X")&&(mark_9.value==="X")&&(mark_8.value===""))
        {
            mark_8.value="X";
            mark_8.disabled=true ; 
            arr[7]=0;
        }
    
    else if((mark_1.value==="X")&&(mark_4.value==="X")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ;
            arr[6]=0;
        }
    
    else if((mark_1.value==="X")&&(mark_7.value==="X")&&(mark_4.value===""))
        {
            mark_4.value="X";
            mark_4.disabled=true ;
            arr[3]=0;
        }
    
    else if((mark_4.value==="X")&&(mark_7.value==="X")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ;
            arr[0]=0;
        }
    
    else if((mark_2.value==="X")&&(mark_5.value==="X")&&(mark_8.value===""))
        {
            mark_8.value="X";
            mark_8.disabled=true ; 
            arr[7]=0;
        }
    
    else if((mark_8.value==="X")&&(mark_5.value==="X")&&(mark_2.value===""))
        {
            mark_2.value="X";
            mark_2.disabled=true ; 
            arr[1]=0;
        }
    
    else if((mark_8.value==="X")&&(mark_2.value==="X")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_3.value==="X")&&(mark_6.value==="X")&&(mark_9.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ; 
            arr[8]=0;
        }
    
    else if((mark_6.value==="X")&&(mark_9.value==="X")&&(mark_3.value===""))
        {
            mark_3.value="X";
            mark_3.disabled=true ; 
            arr[2]=0;
        }
    
    else if((mark_3.value==="X")&&(mark_9.value==="X")&&(mark_6.value===""))
        {
            mark_6.value="X";
            mark_6.disabled=true ; 
            arr[5]=0;
        }
    
    else if((mark_3.value==="X")&&(mark_5.value==="X")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ; 
            arr[6]=0;
        }
    
    else if((mark_3.value==="X")&&(mark_7.value==="X")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_5.value==="X")&&(mark_7.value==="X")&&(mark_3.value===""))
        {
            mark_3.value="X";
            mark_3.disabled=true ; 
            arr[2]=0;
        }
    
    else if((mark_9.value==="X")&&(mark_5.value==="X")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ; 
            arr[0]=0;
        }
    
    else if((mark_1.value==="X")&&(mark_9.value==="X")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_5.value==="X")&&(mark_1.value==="X")&&(mark_6.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ; 
            arr[8]=0;
        }
    
    
    else if((mark_1.value==="O")&&(mark_2.value==="O")&&(mark_3.value===""))
        {
            
            mark_3.value="X";
            mark_3.disabled=true ;
            arr[2]=0;
        }
    
    else if((mark_1.value==="O")&&(mark_3.value==="O")&&(mark_2.value===""))
        {
            mark_2.value="X";
            mark_2.disabled=true ;
            arr[1]=0;
        }
    
    else if((mark_2.value==="O")&&(mark_3.value==="O")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ;
            arr[0]=0;
        }
    
    else if((mark_4.value==="O")&&(mark_5.value==="O")&&(mark_6.value===""))
        {
            mark_6.value="X";
            mark_6.disabled=true ;
            arr[5]=0;
        }
    
    else if((mark_4.value==="O")&&(mark_6.value==="O")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ;
            arr[4]=0;
        }
    
    else if((mark_5.value==="O")&&(mark_6.value==="O")&&(mark_4.value===""))
        {
            mark_4.value="X";
            mark_4.disabled=true ;
            arr[3]=0;
        }
    
    else if((mark_7.value==="O")&&(mark_8.value==="O")&&(mark_9.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ;
            arr[8]=0;
        }
    
    else if((mark_8.value==="O")&&(mark_9.value==="O")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ;
            arr[6]=0;
        }
    
    else if((mark_7.value==="O")&&(mark_9.value==="O")&&(mark_8.value===""))
        {
            mark_8.value="X";
            mark_8.disabled=true ; 
            arr[7]=0;
        }
    
    else if((mark_1.value==="O")&&(mark_4.value==="O")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ;
            arr[6]=0;
        }
    
    else if((mark_1.value==="O")&&(mark_7.value==="O")&&(mark_4.value===""))
        {
            mark_4.value="X";
            mark_4.disabled=true ;
            arr[3]=0;
        }
    
    else if((mark_4.value==="O")&&(mark_7.value==="O")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ;
            arr[0]=0;
        }
    
    else if((mark_2.value==="O")&&(mark_5.value==="O")&&(mark_8.value===""))
        {
            mark_8.value="X";
            mark_8.disabled=true ; 
            arr[7]=0;
        }
    
    else if((mark_8.value==="O")&&(mark_5.value==="O")&&(mark_2.value===""))
        {
            mark_2.value="X";
            mark_2.disabled=true ; 
            arr[1]=0;
        }
    
    else if((mark_8.value==="O")&&(mark_2.value==="O")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_3.value==="O")&&(mark_6.value==="O")&&(mark_9.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ; 
            arr[8]=0;
        }
    
    else if((mark_6.value==="O")&&(mark_9.value==="O")&&(mark_3.value===""))
        {
            mark_3.value="X";
            mark_3.disabled=true ; 
            arr[2]=0;
        }
    
    else if((mark_3.value==="O")&&(mark_9.value==="O")&&(mark_6.value===""))
        {
            mark_6.value="X";
            mark_6.disabled=true ; 
            arr[5]=0;
        }
    
    else if((mark_3.value==="O")&&(mark_5.value==="O")&&(mark_7.value===""))
        {
            mark_7.value="X";
            mark_7.disabled=true ; 
            arr[6]=0;
        }
    
    else if((mark_3.value==="O")&&(mark_7.value==="O")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_5.value==="O")&&(mark_7.value==="O")&&(mark_3.value===""))
        {
            mark_3.value="X";
            mark_3.disabled=true ; 
            arr[2]=0;
        }
    
    else if((mark_9.value==="O")&&(mark_5.value==="O")&&(mark_1.value===""))
        {
            mark_1.value="X";
            mark_1.disabled=true ; 
            arr[0]=0;
        }
    
    else if((mark_1.value==="O")&&(mark_9.value==="O")&&(mark_5.value===""))
        {
            mark_5.value="X";
            mark_5.disabled=true ; 
            arr[4]=0;
        }
    
    else if((mark_5.value==="O")&&(mark_1.value==="O")&&(mark_9.value===""))
        {
            mark_9.value="X";
            mark_9.disabled=true ; 
            arr[8]=0;
        }
    
    else
        {
  x=x.toString();
 let btn=document.getElementById(x);
    btn.value="X";
    btn.disabled=true ;
        }
    check();
            
    return 0 ;


}




function user_click_1()
{
    let mark_1=document.getElementById("1");
    mark_1.value="O";
    mark_1.disabled=true ;
    arr[0]=0;
    check();
    pc_turn_smart(random()) ;
    
    
}

function user_click_2()
{
    let mark_2=document.getElementById("2");
    mark_2.value="O";
    mark_2.disabled=true ;
    arr[1]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}



function user_click_3()
{
    let mark_3=document.getElementById("3");
    mark_3.value="O";
    mark_3.disabled=true ;
    arr[2]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_4()
{
    let mark_4=document.getElementById("4");
    mark_4.value="O";
    mark_4.disabled=true ;
    arr[3]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_5()
{
    let mark_5=document.getElementById("5");
    mark_5.value="O";
    mark_5.disabled=true ;
    arr[4]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_6()
{
    let mark_6=document.getElementById("6");
    mark_6.value="O";
    mark_6.disabled=true ;
    arr[5]=0;
    check();
   pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_7()
{
    let mark_7=document.getElementById("7");
    mark_7.value="O";
    mark_7.disabled=true ;
    arr[6]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_8()
{
    let mark_8=document.getElementById("8");
    mark_8.value="O";
    mark_8.disabled=true ;
    arr[7]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
}

function user_click_9()
{   
    let mark_9=document.getElementById("9");
    mark_9.value="O";
    mark_9.disabled=true ;
    arr[8]=0;
    check();
    pc_turn_smart(random()) ;
    //setTimeout(pc_turn,800);
    
}

