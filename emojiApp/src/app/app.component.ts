import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'emojiApp';
  emojiKeys: string[];
  list: any;

  property = {
    isLiked: false,
    isDeleted: false,
    noLiked: true,
    noDeleted: true
  }

  constructor(private http: HttpClient, private sessionSt: SessionStorageService, public el: ElementRef, public rend: Renderer2) {
  
    window.addEventListener('load', function() {
      if (window.sessionStorage.key0) {
        let row = document.getElementsByClassName('tablerow');
        let length = row.length;
        let title = sessionStorage['title'];

        document.getElementById('title').innerHTML = title;

        for (let i = 0; i < length; i++) {
          let cont = sessionStorage['key' + i];
          cont = cont.split(' ');

          row[i].classList.remove('noDeleted', 'isDeleted', 'noLiked', 'isLiked', 'star', 'hidden');

          for (let j = 0, len = cont.length; j < len; j++) {
            row[i].classList.add(cont[j]);
          }
        }
      }

      let clicks = document.getElementsByClassName('saveChange');

      for (let i = 0, length = clicks.length; i < length; i++) {
        clicks[i].addEventListener('click', function () {
          let selectedChange = getRows('tablerow');
          let title = document.getElementById('title');

          window.sessionStorage['title'] = title;

          for (let j = 0, len = selectedChange.length; j < len; ++j) {
            window.sessionStorage['key' + j] = selectedChange[j];
          }
        });
      }

      function getRows(name) {
        let elements = document.getElementsByClassName(name);
        let elementsArray: any[];

        for (let i = 0, length = elements.length; i < length; i++) {
          elementsArray.push(elements[i].className);
        }

        return elementsArray;
      }
    });

    /*document.addEventListener('load', () => {
      if (window.sessionStorage.key0) {
        let row = document.getElementsByClassName('tablerow');
        let length = row.length;
        let title = sessionStorage['title'];

        document.getElementById('title').innerHTML = sessionStorage['title'];

        for (let i = 0; i < length; i++) {
          let cont = sessionStorage['key' + i];
          cont = cont.split(' ');

          row[i].classList.remove('noDeleted', 'isDeleted', 'noLiked', 'isLiked', 'star', 'hidden');

          for (let j = 0, len = cont.length; j < len; j++) {
            row[i].classList.add(cont[j]);
          }
        }
      }
    });*/
  }

  ngOnInit() {
    this.http.get('./src/app/list2.json').subscribe(data => {
      this.emojiKeys = Object.keys(data);
      this.list = data;
      });
  }

  getLiked(i) {
    let elem = document.getElementById(i);
    elem.classList.toggle('noLiked');
    elem.classList.toggle('isLiked');

    if (elem.classList.contains('star')) {
      elem.classList.add('hidden');
    }
  }

  getDeleted(i) {
    let elem = document.getElementById(i);
    elem.classList.toggle('noDeleted');
    elem.classList.toggle('isDeleted');
    elem.classList.toggle('hidden');
  }

  showAll() {
    let row = document.getElementsByClassName('tablerow');
    let length = row.length;

    document.getElementById('title').innerHTML = 'Все эмодзи';

    for (let i = 0; i < length; i++) {
      if (row[i].classList.contains('noDeleted')) {
        row[i].classList.remove('hidden');
        row[i].classList.remove('star');
      } else
        row[i].classList.add('hidden');
    }
  }

  showLiked() {
    let row = document.getElementsByClassName('tablerow');
    let length = row.length;

    document.getElementById('title').innerHTML = 'Любимые эмодзи';

    for (let i = 0; i < length; i++) {
      if (row[i].classList.contains('isLiked') && !row[i].classList.contains('isDeleted')) {
        row[i].classList.remove('hidden');
        row[i].classList.add('star');
      }

      if (row[i].classList.contains('noLiked') || row[i].classList.contains('isDeleted'))
        row[i].classList.add('hidden');
    }
  }

  showDeleted() {
    let row = document.getElementsByClassName('tablerow');
    let length = row.length;

    document.getElementById('title').innerHTML = 'Удаленные эмодзи';

    for (let i = 0; i < length; i++) {
      row[i].classList.remove('star');
      if (row[i].classList.contains('isDeleted'))
        row[i].classList.remove('hidden')
      else
        row[i].classList.add('hidden');
    }
  }
}
