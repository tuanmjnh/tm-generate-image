<template>
  <div class="text-gray-500 antialiased bg-white js-focus-visible">
    <div class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
      <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
        <router-link to="/" v-slot="{ href, navigate}" custom>
          <a :href="href" @click="navigate" class="overflow-hidden w-10 md:w-auto text-blue-600 font-bold">
            TM generate image from video
          </a>
        </router-link>
        <!-- <a class="overflow-hidden w-10 md:w-auto text-blue-600 font-bold" href="/">
          TM generate image from video</a> -->
      </div>
      <div class="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"><button
                type="button"
                class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2"><svg
               width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg><span>Quick search<span class="hidden sm:inline"> for anything</span></span><span style="opacity: 1;"
                class="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md"><span class="sr-only">Press
            </span><kbd class="font-sans"><abbr title="Control" class="no-underline">Ctrl </abbr></kbd><span class="sr-only"> and </span><kbd
                 class="font-sans">K</kbd><span class="sr-only"> to search</span></span></button>
        <div class="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end space-x-6">
          <select
                  class="appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200 border-gray-300">
            <option value="v2">v 2.0.3
            </option>
            <option value="v1">v1.9.6</option>
            <option value="v0">v0.7.4</option>
          </select>
          <a href="https://github.com/tailwindlabs/tailwindcss"
             class="text-gray-400 hover:text-gray-500 transition-colors duration-200"><span class="sr-only">Tailwind CSS on GitHub</span><svg
                 width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg></a>
        </div>
      </div>
    </div>
    <div class="w-full max-w-8xl mx-auto">
      <div class="lg:flex">
        <div id="sidebar"
             class="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
          <div id="navWrapper"
               class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
            <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"></div>
            <nav id="nav"
                 class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
              <div class="relative flex mb-8 px-3 lg:hidden">
                <select
                        class="appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200">
                  <option value="v2">v
                    <!-- -->2.0.3
                  </option>
                  <option value="v1">v1.9.6</option>
                  <option value="v0">v0.7.4</option>
                </select>
              </div>
              <ul>
                <!-- <li>
                  <a href="/generate" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-pink-500 to-rose-500">
                      <svg class="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5FF3F"></path>
                        <path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path>
                        <path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path>
                      </svg>
                    </div>
                    Generate
                  </a>
                </li> -->
                <router-link to="/generate" v-slot="{ href, navigate}" custom>
                  <li>
                    <a :href="href" @click="navigate" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                      <div class="mr-3 rounded-md bg-gradient-to-br from-pink-500 to-rose-500">
                        <svg class="h-6 w-6" viewBox="0 0 24 24">
                          <path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5FF3F"></path>
                          <path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path>
                          <path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path>
                        </svg>
                      </div>
                      Generate
                    </a>
                  </li>
                </router-link>
                <router-link to="/tesseract" v-slot="{ href, navigate}" custom>
                  <li>
                    <a :href="href" @click="navigate" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                      <div class="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500"><svg class="h-6 w-6" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z" fill="#FDE68A"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
                                fill="#FDF4FF"></path>
                        </svg></div>
                      Tesseract
                    </a>
                  </li>
                </router-link>
                <!-- <li><a href="https://tailwindui.com/components?utm_source=tailwindcss&amp;utm_medium=navigation"
                     class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
                      <svg class="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M6 9l6-3 6 3v6l-6 3-6-3V9z" fill="#F5FF3F"></path>
                        <path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE"></path>
                        <path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD"></path>
                      </svg>
                    </div>Components
                  </a></li>
                <li><a href="https://play.tailwindcss.com" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500"><svg class="h-6 w-6" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z" fill="#FDE68A"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
                              fill="#FDF4FF"></path>
                      </svg></div>Playground
                  </a></li>
                <li><a href="https://blog.tailwindcss.com" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-green-400 to-cyan-500"><svg class="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z" fill="#6EE7B7"></path>
                        <path d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z" fill="#ECFDF5"></path>
                        <path fill="#A7F3D0" d="M8 8h5v4H8zM8 14h5v2H8z"></path>
                      </svg></div>News
                  </a></li>
                <li><a href="/resources" class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4 text-gray-900">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"><svg class="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z" fill="#93C5FD"></path>
                        <path d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
                              fill="#BFDBFE"></path>
                        <path d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z" fill="#EFF6FF"></path>
                        <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
                      </svg></div>Resources
                  </a></li>
                <li><a href="https://www.youtube.com/tailwindlabs"
                     class="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-10">
                    <div class="mr-3 rounded-md bg-gradient-to-br from-fuchsia-500 to-purple-600"><svg class="h-6 w-6" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="7" fill="#F3E8FF"></circle>
                        <path d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z" fill="#C084FC">
                        </path>
                      </svg></div>Screencasts
                  </a></li> -->
              </ul>
            </nav>
          </div>
        </div>
        <div id="content-wrapper" class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div class="px-4 sm:px-6 md:px-8 pt-10 pb-16">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
