const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});

const pickr1 = Pickr.create({
    el: '.color-picker-nano',
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});
const pickr2 = Pickr.create({
    el: '.color-picker-monolith',
    theme: 'monolith', 
    padding: 20,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});

let table = document.getElementById("table");
let div1 = document.getElementById("div1");
pickr.on('change', (color, instance) => {
    let q =pickr.getColor().toHEXA();
    let b = "#" + q[0] + q[1] +q[2]; 
    table.style.backgroundColor = b;
}).on('save', (color, instance) => {
    let a=pickr.getSelectedColor().toHEXA();
    let c = "#" + a[0] + a[1] +a[2];
    div1.style.backgroundColor = c;
});


pickr1.on('change', (color, instance) => {
    let a = color.toHEXA();
    let b = "#" + a[0] + a[1] +a[2]; 
    table.style.backgroundColor = b;
}).on('save', (color, instance) => {
    let a=pickr1.getSelectedColor().toHEXA();
    let c = "#" + a[0] + a[1] +a[2];
    div1.style.backgroundColor = c;
});

pickr2.on('change', (color, instance) => {
    let a = color.toHEXA();
    let b = "#" + a[0] + a[1] +a[2]; 
    table.style.backgroundColor = b;
}).on('save', (color, instance) => {
    let a=pickr2.getSelectedColor().toHEXA();
    let c = "#" + a[0] + a[1] +a[2];
    div1.style.backgroundColor = c;
});
