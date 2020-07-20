//show last questions
for (k = Object.keys(questions).length - 1; k >= Object.keys(questions).length - 5; k--){
  if (questions[Object.keys(questions)[k]] == null) break;
  answers_count = Object.keys(answers).filter((key) => answers[key]['q_id'] == Object.keys(questions)[k]).length;
  categories_string = '';
  questions[Object.keys(questions)[k]]['categories'].forEach((item, i) => {categories_string += '<a class="black-text" style="text-decoration:none;border-bottom:1px dotted;" href="category.html?id='+item+'">' + categories[item]['name'] + '</a>, '});
  categories_string = categories_string.slice(0,categories_string.length-2);
  document.getElementById('last_questions').innerHTML += '<div class="col s12 m12 l12"><blockquote><a class="black-text" style="text-decoration:none;" href="question.html?id='+Object.keys(questions)[k]+'"><h6 style="font-weight:bold;">'+questions[Object.keys(questions)[k]]['content']+'</h6></a><span class="grey-text">Спросил <a href="user.html?id='+questions[Object.keys(questions)[k]]['author']+'">'+users[questions[Object.keys(questions)[k]]['author']]['name']+'</a> и получил ответов: '+ answers_count +'</span><br><span>'+questions[Object.keys(questions)[k]]['date']+' - ' + categories_string + '</span></blockquote></div>';
}

//modal about
$(document).ready(function(){
    $('.modal').modal();
  });
