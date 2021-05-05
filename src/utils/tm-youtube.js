import axios from 'axios'

const url = '/youtube/get_video_info?html5=0&video_id=';

function parseStr(str) {
  return str.split('&').reduce(function (params, param) {
    var paramSplit = param.split('=').map(function (value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}

function getVideoInfo(url) {
  return axios.get(url).then(async res => { // handle success
    if (res.status == 200) {
      const get_video_info = await parseStr(res.data);
      return JSON.parse(get_video_info.player_response);
    }
  })
}

export default class TMYoutube {
  constructor(videoID) {
    this.videoID = videoID;
    this.url = url + videoID
    this.playerResponse = getVideoInfo(this.url)
  }
  GetStreamingData() {
    return this.playerResponse
    // return rs
  }
  GetAdaptiveFormats() {
    return axios.get(this.url).then(async res => { // handle success
      if (res.status == 200) {
        var get_video_info = await parse_str(res.data);
        var adaptiveFormats = JSON.parse(get_video_info.player_response).streamingData.adaptiveFormats;
        // find the audio file
        //  var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
        const rs = {
          id: '',
          title: '',
          duration: 0,
          width: 0,
          height: 0,
          size: 0,
          thumbnail: '',
          extractor: 'youtube',
          fullVideos: [],
          videos: [],
          audios: [],
          viewCount: 0,
          webpageUrl: 'https://www.youtube.com/watch?v='
        }
        for (const i in adaptiveFormats) {
          if (i.audioQuality) rs.audios.push(i)
          else rs.videos.push(i)
        }

        return adaptiveFormats.sort((a, b) => a.bitrate - b.bitrate);
      }
    }).catch((err) => { // handle error
      console.log(err);
    })
  }
  Url() {
    return `http://www.youtube.com${this.url}`
  }
}