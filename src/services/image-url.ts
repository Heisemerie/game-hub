//rawg api supports cropping for specific dimensions eg 600x400

const getCroppedImageUrl = (url: string, width: number, height: number) => {
    if (!url) return '';
    const target = `media/`;
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/' + width + '/' + height + '/' + url.slice(index);
}
 export default getCroppedImageUrl