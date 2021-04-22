<template>
  <div id="container" class="container">
    <div class="md:grid md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-4 gap-6 flex-col jusctify-center">
              <!-- <div class="col-span-3 sm:col-span-2">
                <label for="url" class="block text-sm font-medium text-gray-700">
                  Url
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input type="text" name="url" id="url" @input="debounceInput"
                         class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                         placeholder="www.youtube.com">
                </div>
              </div> -->
              <div class="flex flex-col col-span-2">
                <!-- <label for="file" class="block text-sm font-medium text-gray-700">
                  File
                </label> -->
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input type="text" name="file" id="file" readonly="true"
                         class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300"
                         placeholder="File video" />
                  <label for="file-upload"
                         class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <input type="file" class="sr-only" name="file-upload" id="file-upload" @change="loadFile" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </label>
                </div>
              </div>
              <div class="col-span-1">
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input v-model="timeValue" type="number" name="time" min="1" title="Time to screen capture" @change="checkNumber"
                         class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300"
                         placeholder="Time to screen capture" />
                  <select
                          class="cursor-pointer block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200 border-gray-300 border-l-0">
                    <option value="v2">Seconds
                    </option>
                    <option value="v1">Minute</option>
                    <option value="v0">hour</option>
                  </select>
                </div>
              </div>
              <div v-if="loaded" class="col-span-1 text-right">
                <button type="submit" @click.prevent="onRunVideo"
                        class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Run
                </button>
              </div>
            </div>
            <div :class="['flex flex-wrap',loaded?'':'hidden']">
              <video id="video" width="80%" height="auto" controls style="margin:0 auto" />
            </div>
            <!-- <div :class="['flex flex-wrap',loaded?'':'hidden']">
              <div class="w-1/2">
                <video id="video" width="98%" height="auto" controls />
              </div>
              <div class="w-1/2 overflow-y-scroll" style="height:318px">
              </div>
            </div> -->
            <!-- <div v-if="iframe" class="grid grid-rows-6 grid-flow-col gap-3">
              <div class="row-span-6 col-span-3" v-html="iframe">
                <iframe width="100%" height="100%" style="min-height:500px" :src="url"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="md:grid md:gap-6 mt-5">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div :class="['px-4 py-3 bg-gray-50 text-right sm:px-6 overflow-y-scroll',images.length?'':'hidden']" style="height:19rem">
            <div id="list-image" class="grid grid-cols-4 gap-1" />
          </div>
          <div v-if="images.length" class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" @click.prevent="download"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
    <notification ref="notification" />
  </div>
</template>

<script>
import _ from 'lodash'
// import html2canvas from 'html2canvas'
// import * as readFile from '@/utils/readFile'
// import html2canvas from '@/utils/html2canvas'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { NewGuid } from '@/utils/crypto'
export default {
  components: {
    notification: () => import('@/components/Notification')
  },
  data() {
    return {
      iframe: '',
      loaded: false,
      images: [],
      timeValue: 1,
      interval: null
    }
  },
  created() {
    // document.domain = 'https://www.youtube.com'
  },
  methods: {
    getQueryString(q) {
      if (q == "") return {};
      var b = {};
      q = q.split('?')[1]
      q = q.split('=', 2)
      for (let i = 0; i < q.length; i++) {
        if (q.length < 2) {
          b[q[0]] = ''
        } else {
          b[q[0]] = decodeURIComponent(q[1].replace(/\+/g, " "));
        }
      }
      // for (var i = 0; i < q.length; ++i) {
      //   var p = q[i].split('=', 2);
      //   if (p.length == 1)
      //     b[p[0]] = "";
      //   else
      //     b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      // }
      return b;
    },
    debounceInput: _.debounce(function (e) {
      // const urlParams = new URLSearchParams(e.target.value);
      // const myParam = urlParams.get('v');
      // console.log(myParam)
      const queryString = this.getQueryString(e.target.value)
      const url = `https://www.youtube.com/embed/${queryString.v}`;
      // const url = `/embed/${queryString.v}`;
      this.iframe = `<iframe id="iframe" width="100%" height="100%" style="min-height:500px" src="${url}"
        title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
    }, 500),
    loadFile(event) {
      this.loaded = false
      if (event.target.files.length) {
        const videoNode = document.getElementById('video')
        videoNode.load()
        videoNode.src = ''
        const file = event.target.files[0]
        var type = file.type
        var canPlay = videoNode.canPlayType(type)
        if (canPlay === '') {
          this.loaded = false
          this.$refs.notification.show({
            message: `Can\'t play video`,
            classes: 'bg-red-500 border-red-700',
            color: 'text-red-500',
            icon: `<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>`
          })
        } else {
          var fileURL = URL.createObjectURL(file)
          videoNode.src = fileURL
          this.loaded = true
        }
        document.getElementById('file').value = event.target.files[0].name
        videoNode.addEventListener('play', this.onPlayVideo, false);
        videoNode.addEventListener('pause', this.onPauseVideo, false);
        videoNode.addEventListener('ended', this.onStopVideo, false);
        // function myHandler(e) {
        // }
        // console.log(event.target.files[0].name)
      } else {
        this.loaded = false
        this.$refs.notification.show({
          message: `No file to play`,
          classes: 'bg-red-500 border-red-700',
          color: 'text-red-500',
          icon: `<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>`
        })
      }
      // readFile.GetFile(event.target.files)
    },
    checkNumber(event) {
      const val = parseInt(event.target.value)
      if (val < 1) this.timeValue = 1
    },
    onRunVideo() {
      const video = document.getElementById("video")
      video.play()
      this.onPlayVideo()
    },
    onPlayVideo() {
      this.generate()
      this.interval = setInterval(() => {
        this.generate()
      }, this.timeValue * 1000)
      console.log('play: ', this.interval)
    },
    onPauseVideo() {
      clearInterval(this.interval)
      console.log('pause: ', this.interval)
    },
    onStopVideo() {
      clearInterval(this.interval)
      console.log('end: ', this.interval)
    },
    generate() {
      // const iframe = document.getElementById('iframe')
      // const a = iframe.contentWindow.postMessage("body", "*");
      // console.log(iframe.contents())
      // console.log(iframe)
      // console.log(iframe.contentWindow)
      // console.log(iframe.contentWindow.document.getElementsByTagName('body'))
      // html2canvas(document.getElementById('iframe')).then(function (canvas) {
      //   // var data = canvas.toDataURL('image/png')
      //   // const image = new Image()
      //   // image.src = data
      //   // console.log(image)
      //   document.getElementById('list-image').appendChild(canvas)
      // });

      // html2canvas(document.getElementById('video')).then(function (canvas) {
      //   // var data = canvas.toDataURL('image/png')
      //   // const image = new Image()
      //   // image.src = data
      //   // console.log(image)
      //   document.getElementById('list-image').appendChild(canvas)
      // });

      const video = document.getElementById("video")
      const canvas = document.createElement("canvas")
      // scale the canvas accordingly
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      // draw the video at that frame
      canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height)
      // convert it to a usable data URL
      const dataURL = canvas.toDataURL()
      this.images.push(dataURL.split('base64,')[1])
      // var img = document.createElement("img");
      // img.src = dataURL;
      document.getElementById('list-image').appendChild(canvas)
    },
    download() {
      const zip = new JSZip()
      const guid = NewGuid()
      for (let i = 0; i < this.images.length; i++) {
        zip.folder(`images_${guid}`).file(`${i}.jpg`, this.images[i], { base64: true })
      }
      zip.generateAsync({ type: 'blob' }).then((file) => {
        saveAs(file, `images_${guid}.zip`);
      })
      // console.log(zip)
    }
  }
}
</script>

<style>
#list-image canvas {
  width: 290px;
  height: 290px;
}
</style>