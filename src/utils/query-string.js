export function GetQueryString(q) {
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
}