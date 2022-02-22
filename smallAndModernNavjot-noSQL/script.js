
var app = new function() {
    this.el = document.getElementById('movies');

  
    this.movies = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.movies.length > 0) {
        for (i = 0; i < this.movies.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.movies[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.movies.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      //Holt den Wert
      var task = el.value;
  
      if (task) {
        // neuen film einfügen
        this.movies.push(task.trim());
        // eingabe zurücksetzen
        el.value = '';
        // Neue Liste anzeigen
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Neuen werd im feld anzeigen
      el.value = this.movies[item];
      // Felder zeigen
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // Film Wert holen
        var task = el.value;
  
        if (task) {
          // Film Wert bearbeiten
          self.movies.splice(item, 1, task.trim());
          // Neue Liste anzeigen
          self.FetchAll();
          // Felder verstecken
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Reihe löschen
      this.movies.splice(item, 1);
      // neue Liste zeigen
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Filme';
  
      if (data) {
          if(data ==1){
              name = 'Task'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'Keine ' + name;
      }
    }
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }