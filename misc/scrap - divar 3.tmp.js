let en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
let toEn = s => +[...s].map(i => en[i]).join('');
let lett = {'۱':'یک', '۲':'دو', '۳':'سه', '۴':'چهار', '۵':'پنج', '۶':'شش', '۷':'هفت', '۸':'هشت', '۹':'نه'};

let title = s.match(/<h1 class="kt-page-title__title kt-page-title__title--responsive-sized">(.*?)<\/h1>/)[1]; // let title = document.querySelector('.kt-page-title__title').innerText;
let time = s.match(/<div class="kt-page-title__subtitle kt-page-title__subtitle--responsive-sized">(.*?)<\/div>/)[1]; // let time = document.querySelector('.kt-page-title__subtitle').innerText;
time = time.split('|')[0];
time = time.replace(/([۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> lett[p1]).trim();

// let [sqmeter, builtyear, rooms] = [...document.querySelector('.kt-group-row').querySelectorAll('.kt-group-row-item__value')].map(i=> i.innerText);
let [sqmeter, builtyear, rooms] = s.match(/<span class="kt-group-row-item__value">(.*?)<\/span>/gm).map(i=> i.match(/<span class="kt-group-row-item__value">(.*?)<\/span>/)[1] );


let [credit, , convertable, , type, floor ] = [...document.querySelectorAll('.post-info .kt-base-row.kt-base-row--large.kt-unexpandable-row')].map(i =>
	[...i.querySelectorAll('div > p')].map(i=> i.innerText)
);

credit = credit[1];
credit = credit.match(/(.*) تومان/)[1].match(/^(.{1,4})٬/)[1];

convertable = convertable[1] === 'قابل تبدیل' ? 'بله' : convertable[1] === 'غیر قابل تبدیل' ? 'خیر' : '';
type = type[0] === 'آگهی‌دهنده' && type[1] === 'شخصی' ? 'شخصی' : 'املاک';

floor = floor[1];

[sqmeter, builtyear, rooms, credit] = [sqmeter, builtyear, rooms, credit, floor].map(toEn);


let storage = document.querySelector('.kt-group-row:nth-last-of-type(1) .kt-group-row-item:nth-last-of-type(1) span').innerText;
storage = storage === 'انباری ندارد' ? 'خیر' : 'بله';

let descs = document.querySelector('.kt-description-row__text.post-description.kt-description-row__text--primary').innerText;
let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
let stove       = ['گاز رومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';

[title, time, sqmeter, builtyear, rooms, credit, convertable, type, floor, storage, singlefloor, stove];