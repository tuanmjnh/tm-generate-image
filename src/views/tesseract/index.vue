<template>
  <div>
    <div class="grid grid-cols-3 gap-6 flex-col jusctify-center mb-5">
      <div class="col-span-2 flex flex-col">
        <select id="langsel" v-model="langsel" class="border-gray-300">
          <option value='afr'> Afrikaans </option>
          <option value='ara'> Arabic </option>
          <option value='aze'> Azerbaijani </option>
          <option value='bel'> Belarusian </option>
          <option value='ben'> Bengali </option>
          <option value='bul'> Bulgarian </option>
          <option value='cat'> Catalan </option>
          <option value='ces'> Czech </option>
          <option value='chi_sim'> Chinese </option>
          <option value='chi_tra'> Traditional Chinese </option>
          <option value='chr'> Cherokee </option>
          <option value='dan'> Danish </option>
          <option value='deu'> German </option>
          <option value='ell'> Greek </option>
          <option value='eng'> English </option>
          <option value='enm'> English (Old) </option>
          <option value='meme'> Internet Meme </option>
          <option value='epo'> Esperanto </option>
          <option value='epo_alt'> Esperanto alternative </option>
          <option value='equ'> Math </option>
          <option value='est'> Estonian </option>
          <option value='eus'> Basque </option>
          <option value='fin'> Finnish </option>
          <option value='fra'> French </option>
          <option value='frk'> Frankish </option>
          <option value='frm'> French (Old) </option>
          <option value='glg'> Galician </option>
          <option value='grc'> Ancient Greek </option>
          <option value='heb'> Hebrew </option>
          <option value='hin'> Hindi </option>
          <option value='hrv'> Croatian </option>
          <option value='hun'> Hungarian </option>
          <option value='ind'> Indonesian </option>
          <option value='isl'> Icelandic </option>
          <option value='ita'> Italian </option>
          <option value='ita_old'> Italian (Old) </option>
          <option value='jpn'> Japanese </option>
          <option value='kan'> Kannada </option>
          <option value='kor'> Korean </option>
          <option value='lav'> Latvian </option>
          <option value='lit'> Lithuanian </option>
          <option value='mal'> Malayalam </option>
          <option value='mkd'> Macedonian </option>
          <option value='mlt'> Maltese </option>
          <option value='msa'> Malay </option>
          <option value='nld'> Dutch </option>
          <option value='nor'> Norwegian </option>
          <option value='pol'> Polish </option>
          <option value='por'> Portuguese </option>
          <option value='ron'> Romanian </option>
          <option value='rus'> Russian </option>
          <option value='slk'> Slovakian </option>
          <option value='slv'> Slovenian </option>
          <option value='spa'> Spanish </option>
          <option value='spa_old'> Old Spanish </option>
          <option value='sqi'> Albanian </option>
          <option value='srp'> Serbian (Latin) </option>
          <option value='swa'> Swahili </option>
          <option value='swe'> Swedish </option>
          <option value='tam'> Tamil </option>
          <option value='tel'> Telugu </option>
          <option value='tgl'> Tagalog </option>
          <option value='tha'> Thai </option>
          <option value='tur'> Turkish </option>
          <option value='ukr'> Ukrainian </option>
          <option value='vie'> Vietnamese </option>
        </select>
      </div>
      <div class="col-span-1">
        <button @click="recognize"
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
          <input type="text" name="file" id="file" readonly="true"
                 class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300"
                 placeholder="File image" />
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
    </div>
    <div class="grid grid-cols-3 gap-6 flex-col jusctify-center mb-5">
      <div id="img-place" class="col-span-3 flex flex-col">
        <!-- <img id="text-img" src="@/assets/testocr.png"> -->
        <!-- <img id="text-img" src="@/assets/0.jpg"> -->
        <!-- <img id="text-img" src="@/assets/1.jpg"> -->
        <!-- <img id="text-img" src="@/assets/2.jpg"> -->
        <img id="img-text" src="@/assets/3.jpg">
        <!-- <img id="img-text" src="@/assets/4.jpg"> -->
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 flex-col jusctify-center mb-5">
      <textarea id="text-data" class="border-gray-300 col-span-3 flex flex-col" rows="8" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { createWorker, PSM, OEM } from 'tesseract.js';
import { GetImage } from '@/utils/readFile';
const worker = createWorker({
  logger: m => console.log(m),
});
export default {
  data() {
    return {
      langsel: 'kor'
    }
  },
  methods: {
    recognizeFile: async (event) => {
      const lang = event.target.value
      console.log(lang)
      // await worker.load();
      // await worker.loadLanguage(lang);
      // await worker.initialize(lang, OEM.LSTM_ONLY);
      // await worker.setParameters({
      //   tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
      // });
    },
    loadFile: async (event) => {
      const files = event.target.files
      if (files.length) {
        document.getElementById('file').value = files[0].name
        const img = await GetImage(files[0])
        document.getElementById('img-place').innerHTML = `<img id="img-text" src="${img}"/>`
        // console.log(img)
      }
    },
    recognize: async () => {
      const img = document.getElementById('img-text')
      // console.log(img);
      console.log(langsel.value)
      await worker.load()
      await worker.loadLanguage(langsel.value)
      await worker.initialize(langsel.value, OEM.LSTM_ONLY)
      await worker.setParameters({ tessedit_pageseg_mode: PSM.SINGLE_BLOCK })
      const { data: { text } } = await worker.recognize(img)
      document.getElementById('text-data').value = text
      // console.log(text);
    }
  }
}
</script>

<style>
</style>
