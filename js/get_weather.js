$(function(){
   
   $.ajax({
      url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWB-E99AB7BF-65EB-4B60-940F-70E4356F485B&format=JSON&locationName=%E8%A5%BF%E5%8D%80&elementName=T',
      type:"GET",
      dataType:"json",
      success:function (res) {
         console.log(res.records.locations[0].location[0].locationName);
         const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
         let k = 0;
         let tempture = res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;
         $('#city_name').html(res.records.locations[0].locationsName);
         $('#district').html(res.records.locations[0].location[0].locationName);
         $('#tempture').html(tempture + "&#176;");
         for(let i = 0; i < 10; i++){
            console.log($('.block').eq(i).find('small').html());
            console.log($('.block').eq(i).find('h6').html());
            
            if((i % 2) == 0){
               let j = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
               let t = `<strong>${j}&#176;</strong>`;
               let wd = res.records.locations[0].location[0].weatherElement[0].time[i].startTime;
               console.log(t);
               $('.block').eq(k).find('h6').html(t);
               const d = new Date(wd);
               let day_index = d.getDay();
               $('.block').eq(k).find('h6').html(weekday[day_index]);
               k ++;
            }
         }
      },
      error:function (error) {
         console.log(error);
      }
   })
})
   
     

   