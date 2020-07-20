//check that the category exists
if (read_get()['id'] == null || categories[read_get()['id']] == null){
  document.getElementById('category_does_not_exist').style.display = 'block';
} else {
  //exists
  id = read_get()['id'];

  document.title = categories[id]['name'] + ' | QnA DIFRES.RU';

  document.getElementById('cat_pic').src = 'img/cats/' + id + '.png';
  document.getElementById('cat_name').innerHTML = categories[id]['name'];
  document.getElementById('cat_desc').innerHTML = categories[id]['description'];

  quest = Object.keys(questions).filter((item) => questions[item]['categories'].indexOf(Number(id)) != -1);

  document.getElementById('cat_quest_count').innerHTML = quest.length;

  //show questions
  quest.reverse().forEach((item, i) => {
    document.getElementById('questions_block').innerHTML += '<div class="col s12 m12 l12"><blockquote><a class="black-text" href="question.html?id='+item+'"><h6 style="font-weight:bold;">'+questions[item]['content']+'</h6></a>'+questions[item]['date']+' - <a href="user.html?id='+questions[item]['author']+'">'+users[questions[item]['author']]['name']+'</a></blockquote></div>';
  });


  document.getElementById('category_exists').style.display = 'block';
}
