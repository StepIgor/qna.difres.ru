//check that the user exists
if (read_get()['id'] == null || users[read_get()['id']] == null){
  document.getElementById('user_does_not_exist').style.display = "block";
} else {
  //the user exists
  id = read_get()['id'];

  document.title = users[id]['name'] + ' | QnA DIFRES.RU';

  document.getElementById('user_name').innerHTML = users[id]['name'];
  document.getElementById('user_about').innerHTML = users[id]['description'];
  document.getElementById('user_regdate').innerHTML = users[id]['regDate'];
  document.getElementById('user_pic').style.background = 'radial-gradient(circle, ' + users[id]['color'] + ', grey)';

  //user questions and answers
  user_a = Object.keys(answers).filter((item) => answers[item]['author'] == id);
  user_q = Object.keys(questions).filter((item) => questions[item]['author'] == id);

  document.getElementById('user_answ_count').innerHTML = user_a.length;
  document.getElementById('user_quest_count').innerHTML = user_q.length;

  document.getElementById('user_exists').style.display = 'block';
}

document.getElementById('show_all_answers_but').addEventListener('click', function(e){
  e.preventDefault();
  this.remove();

  if (user_a.length == 0) document.getElementById('user_answers_block').innerHTML = '<div class="col s12 m12 l12">Здесь пусто.</div>';

  user_a.reverse().forEach((item, i) => {
    document.getElementById('user_answers_block').innerHTML += '<div class="col s12 m12 l12"><blockquote><h6 style="font-weight:bold;">'+answers[item]['content']+'</h6>'+answers[item]['date']+' - <a href="question.html?id='+answers[item]['q_id']+'" style="border-bottom:1px dotted grey;" class="grey-text">'+questions[answers[item]['q_id']]['content']+'</a></blockquote></div>';
  });

});

document.getElementById('show_all_questions_but').addEventListener('click', function(e){
  e.preventDefault();
  this.remove();

  if (user_q.length == 0) document.getElementById('user_questions_block').innerHTML = '<div class="col s12 m12 l12">Здесь пусто.</div>';

  user_q.reverse().forEach((item, i) => {
    categories_string = '';
    questions[item]['categories'].forEach((item_c, i) => {categories_string += '<a class="black-text" style="text-decoration:none;border-bottom:1px dotted;" href="category.html?id='+item_c+'">' + categories[item_c]['name'] + '</a>, '});
    categories_string = categories_string.slice(0,categories_string.length-2);
    document.getElementById('user_questions_block').innerHTML += '<div class="col s12 m12 l12"><blockquote><a style="text-decoration:none;" class="black-text" href="question.html?id='+item+'"><h6 style="font-weight:bold;">'+questions[item]['content']+'</h6></a>'+questions[item]['date']+' - '+categories_string+'</blockquote></div>';
  });


});
