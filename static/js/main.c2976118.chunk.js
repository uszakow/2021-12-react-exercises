(this["webpackJsonpreact-exercises"]=this["webpackJsonpreact-exercises"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(8),r=i.n(a),o=(i(14),i(2)),s=(i(15),i(0)),l=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)(),l=Object(o.a)(r,2),j=l[0],b=l[1],d=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=[],c=0;c<e;c++){var a=Math.floor(Math.random()*i)+t;n.push(a)}return n},u=function(e){return e.map((function(e,t){return Object(s.jsx)("div",{className:"item",children:e},t)}))};return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("h1",{children:"Exercises"}),Object(s.jsx)("h2",{children:"I. Przegl\u0105darka"}),Object(s.jsx)("p",{className:"description",children:"Zadanie polega na napisaniu skryptu w JavaScript, kt\xf3ry po klikni\u0119ciu w przycisk wygeneruje 20 losowych liczb ca\u0142kowitych z zakresu od 1 do 100 i umie\u015bci je w dw\xf3ch kolumnach. W jednej kolumnie maj\u0105 znale\u017a\u0107 si\u0119 tylko liczby parzyste, a w drugiej nieparzyste. Dodatkowo obie kolumny musz\u0105 by\u0107 posortowane rosn\u0105co."}),Object(s.jsx)("button",{className:"button",onClick:function(){var e=d(20),t=[],i=[];e.forEach((function(e){e%2===0?i.push(e):t.push(e)})),t.sort((function(e,t){return e-t})),i.sort((function(e,t){return e-t})),a([].concat(t)),b([].concat(i))},children:"Generate numbers"}),i&&j&&Object(s.jsxs)("div",{className:"random-numbers-table",children:[Object(s.jsxs)("div",{className:"column",children:[Object(s.jsx)("div",{className:"header",children:"Odd numbers"}),u(i)]}),Object(s.jsxs)("div",{className:"column",children:[Object(s.jsx)("div",{className:"header",children:"Even numbers"}),u(j)]})]})]})},j=(i(17),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)(),l=Object(o.a)(r,2),j=l[0],b=l[1],d=Object(n.useState)(),u=Object(o.a)(d,2),h=u[0],m=u[1],O=Object(n.useState)([]),k=Object(o.a)(O,2),p=k[0],y=k[1],x=Object(n.useState)([]),f=Object(o.a)(x,2),z=f[0],v=f[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){for(var e=[],t=0,i=Object.entries(localStorage);t<i.length;t++){var n=Object(o.a)(i[t],2),c=n[0],a=n[1];if(c.includes("book-")){var r=JSON.parse(a);e.push(r)}}v(e)},w=function(e){return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{children:e.title}),Object(s.jsx)("div",{children:e.author}),Object(s.jsx)("div",{children:e.priority}),Object(s.jsx)("div",{children:e.categories.join(", ")}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"button",onClick:function(){return t="book-".concat(e.title),localStorage.removeItem(t),void g();var t},children:"Usun\u0105\u0107"})})]},e.title)};return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("h2",{children:"II. Formularze"}),Object(s.jsxs)("div",{className:"description",children:[Object(s.jsx)("div",{children:"Twoim zadaniem jest napisa\u0107 w\u0142asn\u0105 bibliotek\u0119 ksi\u0105\u017cek z wykorzystaniem HTML, CSS oraz JavaScript, w kt\xf3rej znajdzie si\u0119 formularz przyjmuj\u0105cy nast\u0119puj\u0105ce pola:"}),Object(s.jsxs)("ol",{style:{listStyleType:"lower-alpha"},children:[Object(s.jsx)("li",{children:"Tytu\u0142 ksi\u0105\u017cki (co najmniej 1 znak)"}),Object(s.jsx)("li",{children:"Autor ksi\u0105\u017cki (co najmniej 3 znaki)"}),Object(s.jsx)("li",{children:"Priorytet przeczytania (liczby od 1 do 5)"}),Object(s.jsx)("li",{children:"List\u0119 z kategoriami (3 kategorie do wyboru)"}),Object(s.jsx)("li",{children:"Przycisk umo\u017cliwiaj\u0105cy wysy\u0142anie"})]}),Object(s.jsx)("div",{children:"Po wys\u0142aniu formularza strona nie mo\u017ce si\u0119 prze\u0142adowa\u0107. Jednocze\u015bnie wy\u015bwietl nowo dodan\u0105 ksi\u0105\u017ck\u0119 w tabeli i wyczy\u015b\u0107 formularz."}),Object(s.jsx)("div",{children:"Kryteria akceptacji:"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Walidacja dla p\xf3l formularza. W przypadku kiedy jakie\u015b pole nie przechodzi walidacji, ksi\u0105\u017cka nie mo\u017ce zosta\u0107 dodana."}),Object(s.jsx)("li",{children:"U\u017cytkownik ma mo\u017cliwo\u015b\u0107 dodania kolejnej ksi\u0105\u017cki do tabeli."}),Object(s.jsx)("li",{children:"Ca\u0142a tabela zapisuje si\u0119 w localstorage (przy ponownym otworzeniu przegl\u0105darki zostaje za\u0142adowana ponownie i wy\u015bwietlona z takim samym stanem jak by\u0142a przy zamkni\u0119ciu)."})]})]}),Object(s.jsxs)("form",{className:"book-form",name:"library",onSubmit:function(e){e.preventDefault();var t={title:i,author:j,priority:h,categories:p};localStorage.setItem("book-".concat(i),JSON.stringify(t)),g(),e.target.reset()},children:[Object(s.jsx)("label",{htmlFor:"bookTitle",children:"Tytu\u0142 ksi\u0105\u017cki (co najmniej 1 znak)"}),Object(s.jsx)("input",{type:"text",name:"bookTitle",id:"bookTitle",minLength:"1",title:"co najmniej 1 znak",required:!0,onChange:function(e){a(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"bookAuthor",children:"Autor ksi\u0105\u017cki (co najmniej 3 znaki)"}),Object(s.jsx)("input",{type:"text",name:"bookAuthor",id:"bookAuthor",minLength:"3",title:"co najmniej 3 znaki",required:!0,onChange:function(e){b(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"bookPriority",children:"Priorytet przeczytania (liczby od 1 do 5)"}),Object(s.jsx)("input",{type:"number",name:"bookPriority",id:"bookPriority",min:"1",max:"5",title:"liczby od 1 do 5",required:!0,onChange:function(e){m(e.target.value)}}),Object(s.jsx)("div",{children:"Wybierz kategorie:"}),Object(s.jsxs)("select",{size:"3",multiple:!0,onChange:function(e){if(e.target.selectedOptions){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));y(t)}},children:[Object(s.jsx)("option",{value:"textbooks",children:"Podr\u0119czniki"}),Object(s.jsx)("option",{value:"fiction",children:"Literatura pi\u0119kna"}),Object(s.jsx)("option",{value:"journalism",children:"Publicystyka"})]}),Object(s.jsx)("button",{type:"submit",className:"button",children:"Doda\u0107 ksi\u0105\u017ck\u0119"})]}),Object(s.jsxs)("div",{className:"library-table",children:[Object(s.jsx)("div",{children:"Title"}),Object(s.jsx)("div",{children:"Author"}),Object(s.jsx)("div",{children:"Priority"}),Object(s.jsx)("div",{children:"Categories"}),Object(s.jsx)("div",{}),z.map((function(e){return w(e)}))]})]})}),b=i(6),d=i.n(b),u=i(7),h=i(9),m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),i=t[0],a=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(h.a)(d.a.mark((function e(){var t,i,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json");case 3:return t=e.sent,e.next=6,t.json();case 6:i=e.sent,n=Math.floor(Math.random()*i.length),c=i[n],a((function(e){return[].concat(Object(u.a)(e),[c])})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("h2",{children:"III. React"}),Object(s.jsxs)("p",{className:"description",children:["Przygotowanie aplikacji, kt\xf3ra b\u0119dzie pobiera\u0142a cytaty z API, kt\xf3ra b\u0119dzie wy\u015bwietla\u0142a losowy cytat:",Object(s.jsx)("a",{href:"https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json",children:"link"}),". Dodatkowo stw\xf3rz przycisk kt\xf3ry umo\u017cliwi wylosowanie nast\u0119pnego cytatu oraz przycisk, kt\xf3ry pozwoli na powr\xf3t do poprzedniego cytatu."]}),Object(s.jsx)("button",{className:"button",onClick:r,children:"Nast\u0119pny cytat"}),i.length>1&&Object(s.jsx)("button",{className:"button",onClick:function(){if(i.length>1){var e=Object(u.a)(i);e.pop(),a(e)}},children:"Poprzedni cytat"}),i.length>0&&Object(s.jsxs)("div",{children:['"',i[i.length-1].quote,'"']}),i.length>0&&Object(s.jsx)("div",{children:i[i.length-1].author})]})},O=i.p+"static/media/everest.5050cc15.jpg",k=(i(19),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],r=document.getElementsByTagName("body")[0];return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("h2",{children:"IV. Frontend CSS"}),Object(s.jsx)("p",{className:"description",children:"Umie\u015b\u0107 na stronie zdj\u0119cie, kt\xf3re zawsze b\u0119dzie zajmowa\u0142o 100% szeroko\u015bci oraz 100% widoku okna przegl\u0105darki. Obrazek ma zachowywa\u0107 proporcje."}),Object(s.jsx)("button",{className:"button",onClick:function(){a(!0),r.classList.add("body-fill")},children:"Poka\u017c zdj\u0119cie"}),i&&Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("img",{src:O,alt:"everest",className:"fill-image"}),Object(s.jsx)("div",{className:"fill-image-close",onClick:function(){a(!1),r.classList.remove("body-fill")}})]})]})}),p=function(){return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(j,{}),Object(s.jsx)(m,{}),Object(s.jsx)(k,{})]})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c2976118.chunk.js.map