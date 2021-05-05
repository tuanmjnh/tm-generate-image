<template>
  <div>
    <div class="grid grid-cols-3 gap-6 flex-col jusctify-center mb-5">
      <div class="col-span-2 flex flex-col">
      </div>
      <div class="col-span-1">
        <button
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Recognize
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 flex-col jusctify-center mb-5">
      <div class="col-span-3 flex flex-col">
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <input type="text" name="file" @input="debounceInput"
                 class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300"
                 placeholder="File image" />
          <label for="file-upload"
                 class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <!-- <input type="file" class="sr-only" name="file-upload" id="file-upload" @change="loadFile" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </label>
        </div>
      </div>
    </div>
    <div>
      <video id="video-player" controls="controls" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { GetQueryString } from '@/utils/query-string'
// import { GetVideoInfo } from '@/utils/youtube'
import TMYoutube from '@/utils/tm-youtube'
export default {
  data () {
    return {
      langsel: 'kor',
      isOpen: false
    }
  },
  created () {
    // axios.get('/api/a/threads.json').then(res => {
    //   console.log(res)
    // }).catch((er) => {
    //   console.log(er)
    // })
  },
  methods: {
    recognizeFile: async (event) => {
      const lang = event.target.value
      console.log(lang)
    },
    debounceInput: _.debounce(async (e) => {
      // const urlParams = new URLSearchParams(e.target.value);
      // const myParam = urlParams.get('v');
      // console.log(myParam)
      const queryString = GetQueryString(e.target.value)
      // const url = `https://www.youtube.com/embed/${queryString.v}`;
      // const ytbUrl = `http://www.youtube.com/get_video_info?&asv=3&el=detailpage&hl=en_US&video_id=${queryString.v}`
      const inf = new TMYoutube(queryString.v)
      console.log(inf)
      inf.GetStreamingData().then(rs => {
        console.log(rs)
      })
      // // find the audio file
      // var findAudioInfo = video_info.findIndex(obj => obj.audioQuality);
      // // get the URL for the audio file
      // var audioURL = video_info[findAudioInfo].url;
      // // document.getElementById('video-player').src = a
      // console.log(video_info)
      // console.log(audioURL)
    }, 500)
  }
}
</script>

<style>
</style>
