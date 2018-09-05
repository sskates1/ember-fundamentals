import { helper } from '@ember/component/helper';

export function placeholderUrl(params, hash) {
  var height= hash.h;
  var width = hash.w;
  const {w = 100, h = 120} = hash;
  if(!hash.h){
    // debugger
    height = 120;
  }
  if(!hash.w){
    width = 100
  }
  if(hash.w < 10){
    width = 10;
  }
  if(hash.h < 10){
    height = 10;
  }
  return("http://placekitten.com/"+width+'/'+height)
}

export default helper(placeholderUrl);
