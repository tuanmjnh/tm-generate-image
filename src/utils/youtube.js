import axios from 'axios'
// import request from 'request'

function qsToJson(qs) {
  var res = {};
  var pars = qs.split('&');
  var kv, k, v;
  for (const i in pars) {
    kv = pars[i].split('=');
    k = kv[0];
    v = kv[1];
    res[k] = decodeURIComponent(v);
  }
  return res;
}

function parse_str(str) {
  return str.split('&').reduce(function (params, param) {
    var paramSplit = param.split('=').map(function (value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}

export function GetVideoInfo(id, callback) {
  var url = `/youtube/get_video_info?html5=0&video_id=${id}`;
  // return axios.get(url).then(async res => {
  //   // handle success
  //   if (res.status == 200) {
  //     var get_video_info = await qsToJson(res.data);
  //     const player_response = JSON.parse(get_video_info['player_response'])
  //     const rsUrl = player_response['streamingData']['formats'][1]['url']
  //     return rsUrl
  //   }
  // }).catch((err) => {
  //   // handle error
  //   console.log(err);
  // })

  return axios.get(url).then(async res => {
    // handle success
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

      return getAdaptiveFormats.sort((a, b) => a.bitrate - b.bitrate);
    }
  }).catch((err) => {
    // handle error
    console.log(err);
  })

  // request(url, function (err, res, body) {
  //   if (!err && res.statusCode == 200) {
  //     var get_video_info = qsToJson(body);

  //     // remapping urls into an array of objects
  //     var tmp = get_video_info["url_encoded_fmt_stream_map"];
  //     if (tmp) {
  //       tmp = tmp.split(',');
  //       for (i in tmp) {
  //         tmp[i] = qsToJson(tmp[i]);
  //       }
  //       get_video_info["url_encoded_fmt_stream_map"] = tmp;
  //     }

  //     // done
  //     callback(null, get_video_info);
  //   }
  //   else {
  //     // console.log('(youtube.get-video.info) HTTP response not 200/OK');
  //     callback(err, null);
  //   }
  // });
}
