
var main = $(".main");
var sid =$(".rightsection");
var startmsg = $(".startmsg");
var type_message_bar =$(".type-message-bar");
var sidebar =$(".sidebar");
var chatside = $(".chatside");

/* right side  rightsection
main-pro-windo
*/
var rightsection=$(".rightsection");
var bigprofile=$(".main-pro-windo").find("img").first();
var bigname=$(".main-pro-windo").find(".mpw-pname");
var main_gallery_window=$(".main-gallery-windo");
var main_pro_windo=$(".main-pro-windo");

//chat-window-contact-name
var chedname=$(".chat-window-contact-name");
//chat-window-contact-image
var chedimg=$(".chat-window-contact-image");

// sidebar-group-name-set
var sidgns=$(".sidebar-group-name-set"); 
var  gnsinput =$(".groupnamesetinput");
var gnsbtn=$(".groupnamesubmitbtn");

// sidebar-gropu menber add

var sidebar_add_group_member=$(".sidebar-add-group-member");




/* left sidebar seection */

var sidprosec=$(".sidebar-profile");
var sidpromain=$(".sidebar-main");
var sidprocontact=$(".sidebar_contact");


/*  Back To add grroup name page */

function BackToAddGroupMemPage()
{
    sidprosec.hide();
    sidpromain.hide();
    sidprocontact.hide();
    sidgns.hide();
    sidebar_add_group_member.show();
}


/*  add group member page */

function SetGroupMemPage()
{
    sidprosec.hide();
    sidpromain.hide();
    sidprocontact.hide();
    sidgns.hide();
    sidebar_add_group_member.show();
 
}


/* setgroup name cclick */

function SetGroupNamepage()
{
    sidprosec.hide();
    sidpromain.hide();
    sidprocontact.hide();
    sidebar_add_group_member.hide();
    sidgns.show();
}

/* on focus in input to show sub btn */

$(".groupnamesetinput").on("keydown",function(){

   gnsbtn.show();
});

/* profile click */
function OnMainProfileClick()
{
    sidprosec.show();
   sidpromain.hide();
}

/* neww contact click*/

function  OnNewContact()
{
    sidprosec.hide();
    sidpromain.hide();
    sidgns.hide();
    sidebar_add_group_member.hide();
    sidprocontact.show();

}

/* SidebarBack() */
function  SidebarBack()
{  sidprosec.hide();
   sidpromain.show();
   sidprocontact.hide();
   sidgns.hide();
   sidebar_add_group_member.hide();
   console.log("aaaaaa");
}




//on document click

$(document).ready(function(){
    main.hide();
 sid.hide();
 main_gallery_window.hide();   


    // main.css("min-width","52rem");
    // main.css("grid-column","2/3");
   // type_message_bar.css("width","40%");
    // type_message_bar.css("margin-left","30%");
    // sidebar.css("width","39rem");

 startmsg.show();

  //startmsg.hide();
});

/* on media clicck */

function ShowMedia()
{  main_pro_windo.hide();
    main_gallery_window.fadeIn(2000);;   
}


$(".chatside").click(function(){

   var src= $(this).find("img").first().attr("src");
   var name=$(this).find(".contact-name").html();
       console.log(name);
   chedname.html(name);
   chedimg.attr("src",src);

    onchatUser();

});
//onchatUser
function onchatUser()
{

    
main.show();

sid.hide();
startmsg.hide();
main.css("grid-column","2/-1");
type_message_bar.css("width","65%");
type_message_bar.css("margin-left","35%");
sidebar.css("width","45rem");
}

function OnProfile()
{  

   //sid.fadeIn(2000);
 sid.show(10);
    // sid.css(" transition"," all 300ms linear");
   
  //  main_pro_windo.fadeIn(3000);
  main_pro_windo.show(10);
    main_gallery_window.hide();   

main.css("min-width","52rem");
main.css("grid-column","2/3");
type_message_bar.css("width","40%");
type_message_bar.css("margin-left","30%");
sidebar.css("width","39rem");

bigprofile.attr("src",chedimg.attr("src"));
bigname.html(chedname.html());

var temp=chedname.html();
console.log(temp);
}

/*  tablee fileter for main */


    $("#mainserach_chat").on("keyup", function() {
      var value = $(this).val().toLowerCase();
       console.log(value);
    
      $(".chats .chatside").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });


/*  tablee fileter for contact */


    $("#contactserach_chat").on("keyup", function() {
      var value = $(this).val().toLowerCase();
       console.log(value);
    
      $(".chatside").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });




  /*  tablee fileter forgroup member */

    $("#groupmemserach_chat").on("keyup", function() {
      var value = $(this).val().toLowerCase();
       console.log(value);
    
      $(".groupside").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
 