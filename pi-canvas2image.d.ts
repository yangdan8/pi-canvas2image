interface Window {
  PiCanvas2Image: PiCanvas2Image;
}

interface PiCanvas2Image {
  saveAsImage: (canvas: HTMLCanvasElement, fileName?: string, w?: number, h?: number, strType?: 'png' | 'jpeg' | 'gif' | 'bmp') => void;
  saveAsPNG: (canvas: HTMLCanvasElement, fileName?: string, w?: number, h?: number) => void;
  saveAsJPEG: (canvas: HTMLCanvasElement, fileName?: string, w?: number, h?: number) => void;
  saveAsGIF: (canvas: HTMLCanvasElement, fileName?: string, w?: number, h?: number) => void;
  saveAsBMP: (canvas: HTMLCanvasElement, fileName?: string, w?: number, h?: number) => void;

  convertToImage: (canvas: HTMLCanvasElement, w?: number, h?: number, strType?: 'png' | 'jpeg' | 'gif' | 'bmp') => void;
  convertToPNG: (canvas: HTMLCanvasElement, w?: number, h?: number) => void;
  convertToJPEG: (canvas: HTMLCanvasElement, w?: number, h?: number) => void;
  convertToGIF: (canvas: HTMLCanvasElement, w?: number, h?: number) => void;
  convertToBMP: (canvas: HTMLCanvasElement, w?: number, h?: number) => void;
}