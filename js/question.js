//check that the question exists
if (read_get()['id'] == null || questions[read_get()['id']] == null){
  document.getElementById('q_error').style.display = "block";
} else {
  //the question exists

  //show question
  id = read_get()['id'];
  document.title = questions[id]['content'] + " | QnA DIFRES.RU";

  document.getElementById('user_name').innerHTML = users[questions[id]['author']]['name'];
  document.getElementById('user_link').href = "user.html?id=" + questions[id]['author'];
  document.getElementById('about_user').innerHTML = users[questions[id]['author']]['description'];
  document.getElementById('user_pic').style.background = 'radial-gradient(circle, '+users[questions[id]['author']]['color']+', grey)';
  document.getElementById('question_content').innerHTML = questions[id]['content'];
  document.getElementById('question_attachment').innerHTML = questions[id]['attachment'];
  document.getElementById('q_date').innerHTML = questions[id]['date'];

  categories_string = '';
  questions[id]['categories'].forEach((item, i) => {categories_string += '<a class="black-text" style="text-decoration:none;border-bottom:1px dotted;" href="category.html?id='+item+'">' + categories[item]['name'] + '</a>, '});
  categories_string = categories_string.slice(0,categories_string.length-2);
  document.getElementById('q_categories').innerHTML = categories_string;

  answ = Object.keys(answers).filter((key) => answers[key]['q_id'] == id);

  //show answers
  answ.forEach((answ_id, i) => {
    document.getElementById('answers_block').innerHTML += '<table><tr style="border-bottom:none;"><td style="width:64px;padding-bottom:0;"><div style="width:64px;height:64px;background:radial-gradient(circle,'+users[answers[answ_id]['author']]['color']+',grey);border-radius:32px;"></div></td><td style="vertical-align:top;text-aling:left;padding-bottom:0;"><a style="text-decoration:none;font-weight:bold;" class="black-text" href="user.html?id='+answers[answ_id]['author']+'">'+users[answers[answ_id]['author']]['name']+'</a> <span>'+answers[answ_id]['date']+'</span><br><span class="grey-text">'+users[answers[answ_id]['author']]['description']+'</span></td></tr><tr style="border-bottom:none;"><td></td><td style="vertical-align:top;padding-top:0;text-align:justify;"><span style="font-size:18px;">'+answers[answ_id]['content']+'</span></td></tr></table>';
  });

  document.getElementById('answers_count').innerHTML = answ.length;

  document.getElementById('q_exists').style.display = "block";


  //favourites button - if user already has
  my_favs = JSON.parse(localStorage.getItem('favourites'));

  if (my_favs.indexOf(id) != -1){
    document.getElementById('fav_but').innerHTML = '<i class="material-icons left">close</i>Убрать из избранного';
  }
}

document.getElementById('fav_but').addEventListener('click', function(e){
  e.preventDefault();

  my_favs = JSON.parse(localStorage.getItem('favourites'));

  if (my_favs.indexOf(id) == -1){
    my_favs.push(id);
    localStorage.setItem('favourites', JSON.stringify(my_favs));
    document.getElementById('fav_but').innerHTML = '<i class="material-icons left">close</i>Убрать из избранного';
  } else {
    my_favs.splice(my_favs.indexOf(id), 1);
    localStorage.setItem('favourites', JSON.stringify(my_favs));
    document.getElementById('fav_but').innerHTML = '<i class="material-icons left">grade</i>Добавить в избранное';
  }
});


document.getElementById('send_own_answer_but').addEventListener('click', function(e){
  e.preventDefault();

  document.location.href = 'mailto:service@difres.ru?subject=QnA.%20Добавить%20ответ%20к%20вопросу%20#'+id+'.&body=Ваш%20никнейм*:%20'+localStorage.getItem('username').replace(/ /g,'%20')+'%0AО%20себе*:%20'+ localStorage.getItem('about_me').replace(/ /g,'%20') +'%0A%0AСодержание%20ответа:%0A%0A%0A*%20-%20заполнять%20в%20случае,%20если%20вы%20пишете%20на%20данный%20адрес%20впервые.%20Ваш%20профиль%20будет%20привязан%20к%20почте.';
});
