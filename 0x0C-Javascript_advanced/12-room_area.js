let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        let surface = this.width * this.length;
        return surface;
    }
};
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
