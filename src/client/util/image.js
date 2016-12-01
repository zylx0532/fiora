const imageUtils = {
    convertToJpeg: (image, quality = 1) => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0);
        return canvas.toDataURL('image/jpeg', quality);
    },
};

export default imageUtils;
