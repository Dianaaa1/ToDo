var app = new function () {
  this.myProjects = [];
  this.addProject = () => {
    var idvalue = document.getElementById('id').value;
    var namevalue = document.getElementById('name').value;
    var descriptionvalue = document.getElementById('description').value;
    //создаём объект
    this.project = {
      id: idvalue,
      name: namevalue,
      description: descriptionvalue,
    }
    //добавляем
    this.myProjects.push(this.project);

    this.present();
  }
  //выводит инф.
  this.present = function () {
    var data = '';
    if (this.myProjects.length >= 0) {

      for (i = 0; i < this.myProjects.length; i++) {
        //прописую блоки для вывода инф.
        data += '<div class="project-wrapper">';
        data += '<div class="project-checkbox">' + '<input type="checkbox" class="chbox" id="' + i + '" >' + '</div>';
        data += '<div class="project-components">';
        data += '<div class="title">' + 'Id:' + '</div>';
        data += '<div class="project__id">' + this.myProjects[i].id + '</div>' + "  ";
        data += '<div class="title">' + 'Name:' + '</div>';
        data += '<div class="project__name">' + this.myProjects[i].name + '</div>' + "  ";
        data += '<div class="title">' + 'Description:' + '</div>';
        data += '<div class="project__description">' + this.myProjects[i].description + '</div>' + "  ";
        data += '<div><button onclick="app.edit('+ i +'); app.showsave('+i+')">Edit</button></div>';
        data += '<div><button class="save" onclick="app.save('+ i +')">Save</button></div>';
        data += '</div>';
        data += '</div>';
      }
      data += '<div><button onclick="app.delete()">Done</button></div>';
    }
    return document.getElementById('projects').innerHTML = data;
  }
  this.edit=(i)=>{
    //возвращаю значения проекта в форму (для редактирование)
    document.getElementById('id').value=this.myProjects[i].id;
    document.getElementById('name').value=this.myProjects[i].name;
    document.getElementById('description').value=this.myProjects[i].description; 
    this.showsave(i);
  }
    //показую кнопку для сохранение изменений
    this.showsave=(i)=>{
      let butsave = document.getElementsByClassName("save");
      butsave[i].style.display="block";
    }
  //сохраняю
  this.save=(i)=> {
    var idvalue = document.getElementById('id').value;
    var namevalue = document.getElementById('name').value;
    var descriptionvalue = document.getElementById('description').value;
    // новый объект
    this.project = {
      id: idvalue,
      name: namevalue,
      description: descriptionvalue,
    }
    //заменяю существующий
    this.myProjects.splice(i, 1, this.project);
    //показываю на экране
    this.present();
  }
  this.delete = () => {
    var chbox = document.getElementsByClassName('chbox');
    //проверяю весь массив чекбоксов на отмеченные (айди чекбокса = индексу проекта в массиве) 
    for (i = 0; i < chbox.length; i++) {
      if (chbox[i].checked) {
        //случай если элемент последний
        if (i == chbox.length - 1) {
          this.myProjects.pop();
        }
        //удаляю элемент по инлексу равному id checkbox
        let j = chbox[i].id;
        this.myProjects.splice(j, 1);
      }
    }
    this.present();
  }
}