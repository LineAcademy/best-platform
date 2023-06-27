<template>
    <div>
        
    <div dir="rtl" class="rbt-overlay-page-wrapper" style="background-color: #F3F5F4;">
        <div class="breadcrumb-image-container breadcrumb-style-max-width">
            <div class="breadcrumb-content-top text-center">
                <ul class="meta-list justify-content-center mb--10">
                    <li class="list-item">
                        <i class="feather-clock"></i>
                        <span>20 Aug 2021</span>
                    </li>
                </ul>
                <h1 class="title">أضافة أختبار لتطبيق رياكت بأستخدام Cypress 2023</h1>
            </div>
        </div>
        <div class="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
            <div class="blog-content-wrapper rbt-article-content-wrapper">
                <div class="content">
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <img src="/assets/images/blog/details/E2E Testing in React With Cypress.png" alt="Blog Images">
                        </figure>
                    </div>
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 1 : التثبيت</h4></figcaption>
                        </figure>
                    </div>
                    <p>-  هنحمل Cypress بأستخدام Npm / Yarn </p>
                    <section>
      <article>
      <div class="browser">
        <div class="browser__body"> 
          <pre style="margin: 0;">
            <code class="js">
  <span class="hljs-comment">// With NPM</span>
  <span class="hljs-keyword">npm install</span> cypress --save-dev

  <span class="hljs-comment">// With Yarn</span>
  <span class="hljs-keyword">yarn add</span> cypress -D</code>
         </pre>
        </div><!-- browser__body -->
      </div>
      </article>
  </section><br>
                    <p>-  كدا أنت حملت Cypress علي مستوي المشروع كله</p>

                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 2 : فتح Cypress</h4></figcaption>
                        </figure>
                    </div>
                    <section>
      <article>
      <div class="browser">
        <div class="browser__body"> 
          <pre style="margin: 0;">
            <code class="js">
  <span class="hljs-keyword">npx</span> cypress open</code>
         </pre>
        </div><!-- browser__body -->
      </div>
      </article>
  </section><br>
                    <p> الأمر ده عشان يحمل جميع مجلدات المشروع المطلوبة وبعد كدا هيفتح معاك نافذة الترحيب </p>

                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 3 : أختار نوع التيست</h4></figcaption>
                            <figcaption><p>تُظهر نافذة الترحيب نوعين مختلفين من الاختبارات ، اختبار شامل واختبار المكونات في هذه الحالة ، نقوم بإجراء اختبار شامل لواجهة المستخدم حتى تتمكن من اختيار نوع الاختبار كاختبارات نهائية</p></figcaption>
                            
                        </figure>
                    </div>
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <img src="/assets/images/blog/details/Choose-Test-Type-to-test-React-App-in-Cypress.png" alt="Blog Images">
                        </figure>
                    </div>

                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 4 : راجع علي ملفات التكوين</h4></figcaption>
                            <figcaption><p> ستظهر لك نافذة بها بعض الملفات الي هيعملها Cypress عشان تقدر تستخدم نوع الأختبار الي اخترناه راجع عليها ودوس متابعة </p></figcaption>
                        </figure>
                    </div>
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <img src="/assets/images/blog/details/Review-the-Configuration-File-to-test-React-in-Cypress.png" alt="Blog Images">
                        </figure>
                    </div>

                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 5 : أختار المتصفح</h4></figcaption>
                            <figcaption><p>  ، يقوم Cypress بجمع المعلومات من جميع المتصفحات المثبتة في نظامك. إذا كان يدعم نوع المتصفح وإصدار المتصفح ، فإنه يسرد في قسم اختيار متصفح. للتبسيط ، دعنا نختار متصفح Chrome وانقر على Start End لإنهاء الاختبار باستخدام Chrome.</p></figcaption>
                        </figure>
                    </div>
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <img src="/assets/images/blog/details/Choose-Browser-to-test-React-in-Cypress.png" alt="Blog Images">
                        </figure>
                    </div>

                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <figcaption><h4>الخطوة 6 : هنعمل نافذة الأختبار الأولي</h4></figcaption>
                            <figcaption><ul>
                                <li>1- : أضغط علي أنشاء New Spec</li>
                                <li> 2- أكتب أي أسم - مثالا: <span class="hljs-built_in">react.demo.cy.js</span> </li>
                                <li>3- انقر فوق موافق وثم قم بتشغيل الأختبار</li>
                            </ul></figcaption>
                        </figure>
                    </div>
                    <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                        <figure>
                            <img src="/assets/images/blog/details/Create-first-Spec-Window-to-test-React-in-Cypress.png" alt="Blog Images">
                            <figcaption><p>ملاحظة: بشكل افتراضي ، تضيف مثال البرنامج النصي للاختبار ، ويمكننا تعديلها لاحقًا وفقًا لحالة الاستخدام أو سيناريو الاختبار</p></figcaption>
                        </figure>
                    </div>
                    <blockquote class="wp-block-quote">
                        <p>كدا خلاص انت دلوقتي قادر تعمل اختبارات علي رياكت براحتك خش الموقع او شوف فديوهات للتعليم</p>
                        <p> - لينكات مفيدة - </p>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/quickstart">React Quickstart | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/examples">Components Test | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=X6CoUHlnuoY">Cypress Unit Testing For React Developers (Crash course)</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=V-F80UzZAmA">Cypress Component vs E2E Testing | by Mark Noonan</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=Y-7WS2ykQMI">Instagram Clone - React & Cypress End to End Testing</a></cite><br>
                    </blockquote>

                    <!-- BLog Tag Clound  -->
                    <div class="tagcloud">
                        <a href="#">Testing</a>
                        <a href="#">Life Style</a>
                        <a href="#">React</a>
                        <a href="#">Javascript</a>
                        <a href="#">Web App</a>
                        <a href="#">Application</a>
                    </div>
                </div>
                <div class="related-post pt--60">
                    <!-- Start Single Card  -->
                    <div class="rbt-card card-list variation-02 rbt-hover mt--30">
                        <div class="rbt-card-img">
                            <a href="blog-details.html">
                                <img src="assets/images/blog/blog-card-02.jpg" alt="Card image"> </a>
                        </div>
                        <div class="rbt-card-body">
                            <h5 class="rbt-card-title"><a href="blog-details.html">Why Is Education So Famous?</a>
                            </h5>
                            <div class="rbt-card-bottom">
                                <a class="transparent-button" href="blog-details.html">Read
                                    Article<i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fill-rule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629"/><path stroke-linecap="square" d="M.663 5.572h14.594"/></g></svg></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Card  -->

                    <!-- Start Single Card  -->
                    <div class="rbt-card card-list variation-02 rbt-hover mt--30">
                        <div class="rbt-card-img">
                            <a href="blog-details.html">
                                <img src="assets/images/blog/blog-card-03.jpg" alt="Card image"> </a>
                        </div>
                        <div class="rbt-card-body">
                            <h5 class="rbt-card-title"><a href="blog-details.html">Difficult Things About
                                    Education.</a></h5>
                            <div class="rbt-card-bottom">
                                <a class="transparent-button" href="blog-details.html">Read
                                    Article<i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fill-rule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629"/><path stroke-linecap="square" d="M.663 5.572h14.594"/></g></svg></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Card  -->

                    <!-- Start Single Card  -->
                    <div class="rbt-card card-list variation-02 rbt-hover mt--30">
                        <div class="rbt-card-img">
                            <a href="blog-details.html">
                                <img src="assets/images/blog/blog-card-04.jpg" alt="Card image"> </a>
                        </div>
                        <div class="rbt-card-body">
                            <h5 class="rbt-card-title"><a href="blog-details.html">Education Is So Famous, But
                                    Why?</a></h5>
                            <div class="rbt-card-bottom">
                                <a class="transparent-button" href="blog-details.html">Read
                                    Article<i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fill-rule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629"/><path stroke-linecap="square" d="M.663 5.572h14.594"/></g></svg></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Card  -->

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
.rbt-article-content-wrapper{
    background: #F3F5F4;
    box-shadow: none;
}

.rbt-overlay-page-wrapper .breadcrumb-image-container {
    background: #F3F5F4;
    padding: 0;
    margin: 15px auto;
}
.browser__body {
  font: normal 1em monospace;
  background-color: #1F2937;
  border: 1px solid #E7E7E7;
}

code.js {
    color: #C9D1D9;
}

.hljs-comment {
  color: #C9D1D9;
}

.hljs-built_in {
  color: #268BD2;
}

.hljs-keyword {
  color: #D2A8FF;
}

.hljs-params {
  color: #A5D6FF;
}

.hljs-string {
  color: #f5f909;
}
</style>

<script setup lang="ts">
useHead({
    title: 'Home Page App',
    meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'robots', content: 'noindex, follow' },
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [
        { src: '/assets/js/vendor/modernizr.min.js', body: true },
        { src: '/assets/js/vendor/jquery.js', body: true },
        { src: '/assets/js/vendor/bootstrap.min.js', body: true },
        { src: '/assets/js/vendor/sal.js', body: true },
        { src: '/assets/js/vendor/swiper.js', body: true },
        { src: '/assets/js/vendor/magnify.min.js', body: true },
        { src: '/assets/js/vendor/jquery-appear.js', body: true },
        { src: '/assets/js/vendor/odometer.js', body: true },
        { src: '/assets/js/vendor/backtotop.js', body: true },
        { src: '/assets/js/vendor/isotop.js', body: true },
        { src: '/assets/js/vendor/imageloaded.js', body: true },
        { src: '/assets/js/vendor/wow.js', body: true },
        { src: '/assets/js/vendor/waypoint.min.js', body: true },
        { src: '/assets/js/vendor/easypie.js', body: true },
        { src: '/assets/js/vendor/text-type.js', body: true },
        { src: '/assets/js/vendor/jquery-one-page-nav.js', body: true },
        { src: '/assets/js/vendor/bootstrap-select.min.js', body: true },
        { src: '/assets/js/vendor/jquery-ui.js', body: true },
        { src: '/assets/js/vendor/magnify-popup.min.js', body: true },
        { src: '/assets/js/vendor/paralax-scroll.js', body: true },
        { src: '/assets/js/vendor/paralax.min.js', body: true },
        { src: '/assets/js/vendor/countdown.js', body: true },
        { src: '/assets/js/main.js', body: true },
      ],
})  
</script>