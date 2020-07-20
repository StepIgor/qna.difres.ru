//search
function search_now(){
  if (document.getElementById('search_textbox').value.replace(/ /g, '') != ''){
    user_query = document.getElementById('search_textbox').value.toLowerCase().split(' ');
    document.getElementById('search_results').innerHTML = "";
    counter = 0;
    result_found = [];
    for (k = 0; k < Object.keys(questions).length; k++){
      key = Object.keys(questions)[k];
      hits = 0;
      user_query.forEach((word, i) => {
          if (questions[key]['content'].toLowerCase().indexOf(word) != -1){
            hits++;
          }
      });
      if (hits != 0) {
        result_found.push([key,hits]);
        counter++;
      }
      if (counter >= 5) break;
    }

    //show result
    document.getElementById('search_results').style.display = "block";
    if (counter != 0){
      result_found.sort((prev, next) => next[1] - prev[1]);
      result_found.forEach((item, i) => {
        categories_string = '';
        questions[item[0]]['categories'].forEach((cat, i) => {categories_string += '<a class="black-text" style="text-decoration:none;border-bottom:1px dotted;" href="category.html?id='+cat+'">' + categories[cat]['name'] + '</a>, '});
        categories_string = categories_string.slice(0,categories_string.length-2);
        document.getElementById('search_results').innerHTML += '<div class="col s12 m12 l12"><a class="black-text" style="text-decoration:none;" href="question.html?id='+item[0]+'"><h6 style="font-weight:bold;">'+questions[item[0]]['content']+'</h6></a><span>'+questions[item[0]]['date']+' - ' + categories_string + '</span></div>';
      });
    } else {
      document.getElementById('search_results').innerHTML = "<div class='col s12 m12 l12'><i>Ничего не найдено!</i></div>";
    }
  }
}

document.getElementById('search_textbox').addEventListener('keypress', function(e){
  if (e.key == 'Enter'){
    search_now();
  }
});

//create localStorage vars
if (localStorage.getItem('username') == null){
  localStorage.setItem('username', 'none');
  localStorage.setItem('about_me', 'none');
  favs = [];
  localStorage.setItem('favourites', JSON.stringify(favs));
}

//sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//send question
function send_question(){
  document.location.href = 'mailto:service@difres.ru?subject=QnA.%20Новый%20вопрос&body=Ваш%20никнейм*:%20'+localStorage.getItem('username').replace(/ /g,'%20')+'%0AО%20себе*:%20'+ localStorage.getItem('about_me').replace(/ /g,'%20') +'%0AКатегории%20вопроса%20(может%20быть%20несколько):%0A%0AСодержание%20вопроса:%0A%0A%0A*%20-%20заполнять%20в%20случае,%20если%20вы%20пишете%20на%20данный%20адрес%20впервые.%20Ваш%20профиль%20будет%20привязан%20к%20почте.';
}
