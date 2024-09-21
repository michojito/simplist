const { widget, showUI, closePlugin } = figma

/**
 * Shade a given color.
 * @param color The hexcode to the color
 * @param percent The percentage of shading (`+` to ligten, `-` to darken)
 * @returns The hexcode of the shaded color
 */
export function shadeColor(color: string, percent: number): string {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

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

/**
 * Calculates the brightness of a color based on its hexadecimal value.
 * 
 * This function uses the following formula to calculate perceived brightness:
 * (Red * 299 + Green * 587 + Blue * 114) / 1000
 * 
 * The result ranges from 0 (darkest) to 255 (brightest).
 * 
 * @param hex - The hexadecimal color code (e.g., "#RRGGBB").
 * @returns The perceived brightness of the color, ranging from 0 to 255.
 */
export function calculateBrightness(hex: string): number {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    return (r * 299 + g * 587 + b * 114) / 1000;
}