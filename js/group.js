
// add group member

var con_select_mem=$(".con-select-mem");

var DataArray=[];

// add memebers in array
$(".groupside").click(function(){

    var src= $(this).find("img").first().attr("src");
    var name=$(this).find(".contact-name").html();
    var id= $(this).attr("data-id"); 


   var check = DataArray.some(ids => (ids.gmid == id ));
   if(check)
   {
    console.log("ok");
   }else{

   DataArray.push(
    {
    gmid:id,
    names:name,
    img:src
    }  
);

       console.log("not ok");
   }

   PrintGroupMember(DataArray);
   

   
   

});

//remove meembers in array

function RemoveMember(ind)
{

    DataArray.splice(ind,1);
    PrintGroupMember(DataArray);
}





function PrintGroupMember(TempArray)
{
    var str ='';

     for(var i in TempArray)
     {
        str+=`<span >
        <div class="groupmemberselction" 
        style="display: inline;font-size: 15px;
        color: #4a4a4a;background: #e6e6e6;
        padding: 8px;border-radius:18px;
        padding-bottom: 10px;
        ">
        <div style="display: inline;">`;
        
        str+=`
        <img  src="${TempArray[i].img}"
        style="width: 30px;height: 30px;
        border-radius: 50%;
        "/>
        </div>`;
        
        str+=`
        <div style="display: inline;
        margin-left: 10px;">${TempArray[i].names}</div>
        <div style="margin-right: 10px;display: inline;
        margin-left: 10px;">
        <span onclick="RemoveMember(${i})">x</span>
        
        </div>
        </div>
        </span>`;

     }
     
     con_select_mem.html(str);
}






