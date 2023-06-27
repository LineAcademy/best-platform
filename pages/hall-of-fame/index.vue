<template>
    <div>
            <!-- Start Card Style -->
    <div class="rbt-dashboard-area rbt-section-overlayping-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Start Dashboard Top  -->
                    <div class="rbt-dashboard-content-wrapper">
                        <div class="tutor-bg-photo mt--19">
                            <nuxt-img
                                loading="lazy" 
                                fit="cover" 
                                provider="cloudinary" 
                                src="half-of-fame.webp"
                                alt="h"
                            />
                            <!-- <img src="/assets/images/كورس بناء موقع جونيور.png" alt=""> -->
                        </div>
                    </div>
                    <!-- End Dashboard Top  -->

                    <div class="rbt-team-area bg-color-white rbt-section-gapBottom">
        <div class="container">
            <div class="row mb--60">
                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <h2 class="title">الفديوهات</h2>
                                    </div>
                                </div>
            </div>
            <div dir="rtl" class="row row--15 mt_dec--30">
              <template
							v-for="(p, i) in hall"
							:key="`product-${i}-${p.id}`"
						>
						<div class="col-lg-4 col-md-6 col-12 mt--30">
							<NuxtLink
								:to="`${p._path}`"
								:class="{ 'lg:col-start-3': i === 0 && !activeCategory }"
								class="rounded-md bg-white hover:shadow-lg transition-all hover:cursor-pointer"
							>
              <div class="rbt-team team-style-default rbt-hover-02">
                        <div class="inner">
                            <div class="thumbnail">
                                <nuxt-img
                                loading="lazy" 
                                fit="cover"
								style="width: 100%;"
                                provider="cloudinary" 
								:src="p.image"
								:alt="p.title" 
								/>
                            </div>
                            <div class="content">
                                <h2 class="title">{{ p.title }}</h2>
                                <h6 class="subtitle theme-gradient">Front-End Develoepr</h6>
                                <p class="description">  {{ p.description }}  </p>
                        <a class="rbt-btn btn-gradient mt-4 hover-icon-reverse" :href="`${p._path}`"><span class="icon-reverse-wrapper"><span>اقرء المزيد</span></span></a>
                            </div>
                        </div>
                    </div>
							</NuxtLink>
						</div>
						</template>
            </div>
        </div>
    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Card Style -->
    </div>
</template>

<script setup>


const { data: hall } = await useAsyncData("hall-of-fame", () => {
		return queryContent("hall-of-fame").find();
	});

	console.log(hall.value);

	const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }

useHead({
    title: 'Home Page App',
    meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'robots', content: 'noindex, follow' },
    ],
})  
</script>