import "@testing-library/jest-dom";

class OffscreenCanvasMock {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getContext() {
    return {
      imageSmoothingEnabled: true,
    };
  }
}

global.OffscreenCanvas = OffscreenCanvasMock;
