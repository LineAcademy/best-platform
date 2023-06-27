<template lang="">
    <div>
        <header dir="rtl" class="rbt-header rbt-header-10">
        <div class="rbt-sticky-placeholder"></div>
        <div class="rbt-header-wrapper header-space-betwween header-sticky">
            <div class="container-fluid">
                <div class="mainbar-row rbt-navigation-center align-items-center">
                    <div class="header-left rbt-header-content">
                        <div class="header-info">
                            <div class="logo">
                                <NuxtLink to="/">
                                    <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="logo_2_d8qsqv"
								alt="Education Logo Images" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="rbt-main-navigation d-none d-xl-block">
                        <nav class="mainmenu-nav">
                            <ul class="mainmenu">
                                <li class="with-megamenu has-menu-child-item position-static">
                                    <a href="/courses/">الكورسات <i class="feather-chevron-down"></i></a>
                                    <!-- Start Mega Menu  -->
                                    <div class="rbt-megamenu grid-item-3">
                                        <div class="wrapper">
                                            <div class="row row--15">
                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <div class="rbt-ads-wrapper">
                                                        <a class="d-block" href="/courses/"><img src="/assets/images/تعلم برمجة الويب الأن.png" alt="Education Images"></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <h3 class="rbt-short-title">المشاريع</h3>
                                                    <ul class="mega-menu-item">
                                                        <li><NuxtLink to="/courses/build-junior-site">بناء موقع جونيور [8 فديوهات]</NuxtLink></li>
                                                        <li><a href="/courses/javascript-projects/">مشاريع جافاسكريبت للمبتدئين</a></li>
                                                        <li><a href="/courses/upload-site-to-github/">رفع المشروع علي جيتهب</a></li>
                                                        <li><a href="/courses/upload-site-to-netlify/">رفع المشروع علي نيتفلاي</a></li>
                                                    </ul>
                                                </div>

                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <h3 class="rbt-short-title">التعليم</h3>
                                                    <ul class="mega-menu-item">
                                                        <li><a href="/courses/javascript-before-react/">دورة اهم الاشياء جافاسكريبت قبل رياكت</a></li>
                                                        <li><a href="/courses/javascript-interview-qs/">دورة أسئلة الانترفيو جافاسكريبت</a></li>
                                                        <li><a href="/courses/react/">دورة شرح رياكت</a></li>
                                                        <li><a href="/courses/javascript-basics/">دورة شرح أساسيات جافاسكريبت </a></li>
                                                        <li><a href="#">دورة اتتش تي امل <span class="rbt-badge-card">قريبا</span></a></li>
                                                        <li><a href="#">دورة سي اس اس <span class="rbt-badge-card">قريبا</span></a></li>
                                                    </ul>
                                                </div>

                                               
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Mega Menu  -->
                                </li>

                                <li class="has-menu-child-item">
                                    <NuxtLink to="/contact">مشاريع الطلاب
                                    </NuxtLink>
                                </li>

                                <li class="has-menu-child-item">
                                    <a href="/student-stories/">حكايات للطلاب
                                    </a>
                                </li>

                                <li class="has-menu-child-item">
                                    <a href="/review/">اراء الطلاب والعملاء
                                    </a>
                                </li>

                                <li class="has-menu-child-item">
                                    <a href="/blog/"> المدونة
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div class="header-right">


                        <div class="rbt-btn-wrapper d-none d-xl-block">
                            <ul class="social-icon social-default justify-content-center justify-content-lg-start">
                                <li><a href="https://www.facebook.com/">
                                        <i class="feather-facebook"></i>
                                    </a>
                                </li>
                            
                                <li><a href="https://www.instagram.com/">
                                        <i class="feather-youtube"></i>
                                    </a>
                                </li>
                                <li><a href="https://www.linkdin.com/">
                                        <i class="feather-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Start Mobile-Menu-Bar -->
                        <div class="mobile-menu-bar d-block d-xl-none">
                            <div class="hamberger">
                                <button class="hamberger-button rbt-round-btn">
                                    <i class="feather-menu"></i>
                                </button>
                            </div>
                        </div>
                        <!-- Start Mobile-Menu-Bar -->

                    </div>
                </div>
            </div>
        </div>
        <a class="rbt-close_side_menu" href="javascript:void(0);"></a>
    </header>
    <!-- Mobile Menu Section -->
    <div class="popup-mobile-menu">
        <div class="inner-wrapper">
            <div class="inner-top">
                <div class="content">
                    <div class="logo">
                        <a href="index.html">
                            <img src="assets/images/أحمد وليد.png" alt="Education Logo Images">
                        </a>
                    </div>
                    <div class="rbt-btn-close">
                        <button class="close-button rbt-round-btn"><i class="feather-x"></i></button>
                    </div>
                </div>
                <p class="description">أحمد وليد والبرمجة أتعمل عشان أشارك الناس معرفتي بشكل لطيف ومرتب</p>
                <ul class="navbar-top-left rbt-information-list">
                    <li>
                        <a href="mailto:hello@example.com"><i class="feather-mail"></i>ahmedalkpeer.v2@gmail.com</a>
                    </li>
                    <li>
                        <a href="#"><i class="feather-phone"></i>(+20) 1025338973</a>
                    </li>
                </ul>
            </div>

            <nav dir="rtl" class="mainmenu-nav">
                <ul class="mainmenu">
                    <li class="with-megamenu has-menu-child-item position-static">
                        <a href="#">الكورسات <i class="feather-chevron-down"></i></a>
                        <!-- Start Mega Menu  -->
                        <div class="rbt-megamenu menu-skin-dark">
                            <div class="wrapper">
                                <div dir="rtl" class="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                                    <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                        <h3 class="rbt-short-title">المشاريع</h3>
                                        <ul class="mega-menu-item">
                                            <li><a href="/courses/build-junior-site/">بناء موقع جونيور [8 فديوهات]</a></li>
                                            <li><a href="/courses/javascript-projects/">مشاريع جافاسكريبت للمبتدئين</a></li>
                                            <li><a href="/courses/upload-site-to-github/">رفع المشروع علي جيتهب</a></li>
                                            <li><a href="/courses/upload-site-to-netlify/">رفع المشروع علي نيتفلاي</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                        <h3 class="rbt-short-title">التعليم</h3>
                                        <ul class="mega-menu-item">
                                            <li><a href="/courses/javascript-before-react/">دورة اهم الاشياء جافاسكريبت قبل رياكت</a></li>
                                            <li><a href="/courses/javascript-interview-qs/">دورة أسئلة الانترفيو جافاسكريبت</a></li>
                                            <li><a href="/courses/react/">دورة شرح رياكت</a></li>
                                            <li><a href="/courses/javascript-basics/">دورة شرح أساسيات جافاسكريبت </a></li>
                                            <li><a href="#">دورة اتتش تي امل <span class="rbt-badge-card">قريبا</span></a></li>
                                            <li><a href="#">دورة سي اس اس <span class="rbt-badge-card">قريبا</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="load-demo-btn text-center">
                                    <a class="rbt-btn-link color-white" href="#">أنزل عشان تشوف زيادة <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Mega Menu  -->
                    </li>

                    <li>
                        <a href="#">مشاريع الطلاب</a>
                    </li>

                    <li>
                        <a href="#">حكايات الطلاب</a>
                    </li>

                    <li>
                        <a href="#">اراء الطلاب والعملاء</a>
                    </li>

                    <li>
                        <a href="#">مقالات تهمك</a>
                    </li>
                </ul>
            </nav>

            <div class="mobile-menu-bottom">
                <div class="rbt-btn-wrapper mb--20">
                    <a class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" href="#">
                        <span>تحدث معي</span>
                    </a>
                </div>

                <div class="social-share-wrapper">
                    <span class="rbt-short-title d-block text-center">تابعني</span>
                    <ul class="social-icon social-default transparent-with-border mt--20">
                        <li><a href="https://www.facebook.com/">
                                <i class="feather-facebook"></i>
                            </a>
                        </li>
                        <li><a href="https://www.twitter.com">
                                <i class="feather-twitter"></i>
                            </a>
                        </li>
                        <li><a href="https://www.instagram.com/">
                                <i class="feather-instagram"></i>
                            </a>
                        </li>
                        <li><a href="https://www.linkdin.com/">
                                <i class="feather-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <a class="close_side_menu" href="javascript:void(0);"></a>
    </div>
</template>

