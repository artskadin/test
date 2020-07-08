import concat from 'goss_concat'

{
    function rgbColor(r=255, g=255, b=255) {
        return [r, g, b].some((color) => color < 0 || color > 255) 
            ? 'значение каждого цвета должно лежать в диапазоне [0, 255]'
            : concat('rgb(', r, ',', g, ',', b, ')')
    }
    console.log(rgbColor())
}
