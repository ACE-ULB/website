---
permalink: /index.html
layout: home
title: ACE - Association des Cercles Étudiants de l'ULB
stylesheet:
    - name: home
    - name: footer
    - name: section_card
---
{% include navigation.html %}
<div class="jumbotron jumbotron-fluid position-static">
</div>
<div class="container-fluid position-absolute"><div class="row">
  <div class="container jumbo-text col-lg-6 col-12">
    <div class="box">
      <div class="title">
        <span class="block"></span>
        <h1>Association des Cercles Étudiants<span></span></h1>
      </div>
      <div class="role">
        <div class="block"></div>
        <p>Guindaille Propre, Guindaille Safe, Guindaille Durable</p>
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <img src="assets/images/ACE.png" class="logo"/>
  </div>
</div></div>

<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="container-fluid accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <p class="d-flex cal-title">Calendrier</p>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionHomePage"><!--write 'show' behind 'collapse' for opening at running-->
      <div class="accordion-body container">
        <div class="calendar d-flex"><iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23039BE5&ctz=Europe%2FBrussels&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH&src=NDk4OTE5MjI4YWVhYjU4YzhhNmQ4ZmExMDI5NjVlYmRlN2QzMDFkNTA0ZDE2NWRkNmRhMWI4ODIyZTliYTU4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548" style="border-width:0" width="2000vw" height="500vh" frameborder="0" scrolling="no"></iframe></div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="container-fluid accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <p class="d-flex cal-title">Contenu</p>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionHomePage">
      <div class="accordion-body container mb-5">
          <div class="row">
            {% include section_card.html %}
          </div>
      </div>
    </div>
  </div>
</div>

{% include footer.html %}
{% include tiny_footer.html %}