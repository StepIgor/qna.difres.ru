$(document).ready(function(){
    $('select').formSelect();
    $('.modal').modal();
  });

  //create href for links
  document.getElementById('a_about').addEventListener('click', function(e){
    e.preventDefault();
    document.location.href = 'mailto:service@difres.ru?subject=QnA.%20Обновить%20информацию%20о%20себе&body=Никнейм*:%20' + localStorage.getItem('username') + '%0AНовое%20описание:%20' + localStorage.getItem('about_me') + '%0A%0A%0A*%20-%20обязательно%20для%20заполнения%20при%20первой%20отправке%20письма%20на%20данный%20адрес.';
  });

  document.getElementById('a_color').addEventListener('click', function(e){
    e.preventDefault();
    document.location.href = 'mailto:service@difres.ru?subject=QnA.%20Обновить%20цвет%20аватара&body=Никнейм*:%20' + localStorage.getItem('username') + '%0AНовый%20цвет%20аватара%20(один%20цвет,%20не%20оттенок):%20%0A%0A%0A*%20-%20обязательно%20для%20заполнения%20при%20первой%20отправке%20письма%20на%20данный%20адрес.';
  });

  //fill
  document.getElementById('username_t').value = localStorage.getItem('username');
  document.getElementById('about_t').value = localStorage.getItem('about_me');

  var prev_name;
  var prev_about;

  document.getElementById('username_t').addEventListener('focus', function(e){
    prev_name = document.getElementById('username_t').value;
  });
  document.getElementById('username_t').addEventListener('blur', function(e){
    if (document.getElementById('username_t').value != prev_name && document.getElementById('username_t').value.replace(/ /g, '') != ""){
        localStorage.setItem('username', document.getElementById('username_t').value);
        prev_name = localStorage.getItem('username');
        M.toast({html: 'Изменения сохранены'});
    }
  });


  document.getElementById('about_t').addEventListener('focus', function(e){
    prev_about = document.getElementById('about_t').value;
  });
  document.getElementById('about_t').addEventListener('blur', function(e){
    if (document.getElementById('about_t').value != prev_about && document.getElementById('about_t').value.replace(/ /g, '') != ""){
        localStorage.setItem('about_me', document.getElementById('about_t').value);
        prev_about = localStorage.getItem('about_me');
        M.toast({html: 'Изменения сохранены'});
    }
  });
