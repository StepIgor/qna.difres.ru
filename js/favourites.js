var my_favs = JSON.parse(localStorage.getItem('favourites'));

function show_favs(){
  document.getElementById('favs_count').innerHTML = my_favs.length;
  document.getElementById('favs_block').innerHTML = "";
  //show questions
  my_favs.reverse().forEach((id, i) => {
    categories_string = '';
    questions[id]['categories'].forEach((item, i) => {categories_string += '<a class="black-text" style="text-decoration:none;border-bottom:1px dotted;" href="category.html?id='+item+'">' + categories[item]['name'] + '</a>, '});
    categories_string = categories_string.slice(0,categories_string.length-2);
    document.getElementById('favs_block').innerHTML += '<div class="col s12 m12 l12"><blockquote><a href="question.html?id='+id+'" style="text-decoration:none;"><h6 class="black-text" style="font-weight:bold;">'+questions[id]['content']+'</h6></a>'+categories_string+' - <span class="red-text" style="border-bottom:1px dotted red;cursor:pointer;" onclick="remove_q('+id+')">Удалить</span></blockquote></div>';
  });
}

function remove_q(r_id){
  my_favs.splice(my_favs.indexOf(String(r_id)), 1);
  localStorage.setItem('favourites', JSON.stringify(my_favs));
  show_favs();
}

show_favs();
