/*fetch('./js/json.json').then(res => {
  console.log(res);
  return res.json();
}).then(data => {
  console.log(data);
})*/
/*var xhr = new XMLHttpRequest();
var url = './js/json.json';
xhr.open("GET", url);
xhr.responseType = 'json';
xhr.onload = function(){
  console.log(xhr.response);
};
xhr.onerror = function(){
  console.log("error")
}
xhr.send();*/
const url = 'https://www.zhihu.com/api/v4/questions/447176215/answers?include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cattachment%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Cis_labeled%2Cpaid_info%2Cpaid_info_content%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cis_recognized%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%2A%5D.topics%3Bdata%5B%2A%5D.settings.table_of_content.enabled&limit=5&offset=5&platform=desktop&sort_by=default'
fetch(url, {
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, same-origin, *omit
  headers: {
    'Access-Control-Allow-Origin':'*',
    "content-type": "application/json"
  },
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "no-cors", // no-cors, cors, *same-origin
}).then(res => {
  console.log(res.json);
  // return res.json();
  // res = JSON.parse(JSON.stringify(res));
  // console.log(res.json());

  // console.log(res.json());
})
