/* Infos */
export const Infos = {
  name: 'SimpList',
  version: '1.0',
  author: 'Michel R.'
}

/* Init */
class Color{
  white = `#FFF`
  greyVeryLow = `#EFEFEF`
  greyLow = `#CCCCCC`
  greyMedium = `#B2B2B2`
  greyHigh = `#8A8A8A`
  greyVeryHigh = `#333333`
  black = `#000`
  error = `#E30044`

  text = `#000`

  accent = `#0038FF`
  textAccent = `#FFF`

  resetAccent() {
    this.accent = `#0038FF`
    this.textAccent = `#FFF`
  }

  setAccent(color: string) : string{
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      this.accent = color
    }
    return this.accent
  }
}
export var color = new Color()

export enum cornerRadius {
  low = 4,
  medium = 8,
  high = 12
}
export enum spacing {
  none = 0,
  lowest = 4,
  lower = 8,
  low2 = 10,
  low = 12,
  medium = 16,
  higher = 32
}

export const font = {
  h1: 24,
  body: 17,
  footnote: 13,
  caption: 11,
}



export function shadeColor(hex:string, percent:number): string{

  var R = parseInt(hex.substring(1,3),16);
  var G = parseInt(hex.substring(3,5),16);
  var B = parseInt(hex.substring(5,7),16);

  R = R * (100 + percent) / 100;
  G = G * (100 + percent) / 100;
  B = B * (100 + percent) / 100;

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}